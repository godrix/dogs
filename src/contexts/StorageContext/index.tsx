import React, {createContext, useContext, useEffect, useState, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import api from '../../services/api';
// import { Container } from './styles';

interface StorageContextData {
signed:boolean;
signIn:({username, password}:SigInRequest)=>Promise<void>;
userData:UserData | null;
signOut:()=>void;
loading:boolean;
}

interface UserData{
  name:string;
  email:string;
}

interface SigInRequest{
  username:string;
  password:string;
}

const StorageContext = createContext<StorageContextData>({} as StorageContextData)

const StorageProvider: React.FC = ({children}) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function signIn({username, password}:SigInRequest) {
    try {
      setLoading(true);
      const response = await api.post('/jwt-auth/v1/token', {
        username,
        password
      });

      window.localStorage.setItem('@dogs:token', response.data.json.token);
      api.defaults.headers.common['Authorization'] = `Bearer ${response.data.json.token}`;
      navigate('/count');
      getUserInfo();
    } catch (error) {
      alert('Ocorreu um erro, chegue o console.log')
      console.log(error)
      signOut();
    }finally{
      setLoading(false);
    }
  }

  const getUserInfo = useCallback(async()=>{
    try {
      setLoading(true);
      const response = await api.get('/api/user');
      setUserData(response.data);
    } catch (error) {
      alert('Ocorreu um erro ao obter os dados do usuario');
    }finally{
      setLoading(false)
    }
  },[])


  const signOut = useCallback(()=>{
      setUserData(null);
      setLoading(false);
      window.localStorage.clear();
      navigate('/login')
  },[navigate])

  useEffect(()=>{
   async function validateLogin(){
    const token = window.localStorage.getItem('@dogs:token');
    if(token){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      try {
        setLoading(true);
        await api.post('/jwt-auth/v1/token/validate');

        getUserInfo();

      } catch (error) {
        signOut();
      }finally{
        setLoading(false)
      }

    }
   }

   validateLogin();
  },[getUserInfo, signOut])


  return (
  <StorageContext.Provider value={{signed: !!userData, signIn, signOut, userData, loading}}>
    {children}
  </StorageContext.Provider>
  );
}

function useStorage(){
  const context = useContext(StorageContext);

  if(!context){
    throw new Error("useStorage must be used within a StorageProvider");
  }

  return context;
}

export { StorageProvider, useStorage};
