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
  userName:string;
  email:string;
}

interface SigInRequest{
  username:string;
  password:string;
}

interface SigInResponse{
  token: string;
  user_email: string;
  user_nicename: string;
  user_display_name: string;
  message?:string;
}

const StorageContext = createContext<StorageContextData>({} as StorageContextData)

const StorageProvider: React.FC = ({children}) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function signIn({username, password}:SigInRequest) {
    try {
      setLoading(true);
      const response = await api.post<SigInResponse>('/jwt-auth/v1/token', {
        username,
        password
      });

      window.localStorage.setItem('@dogs:app', JSON.stringify(response.data));
      setUserData({
        name:response.data.user_display_name,
        userName:response.data.user_nicename,
        email:response.data.user_email,
      });
      api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

      navigate('/count');

    } catch (error) {

      if(error.response.status === 403){
       alert(error.response.data.message);
      }else{
        alert('Ocooreu um erro ao realizar o login');
      }
      signOut();
    }finally{
      setLoading(false);
    }
  }


  const signOut = useCallback(()=>{
      setUserData(null);
      setLoading(false);
      window.localStorage.clear();
      navigate('/login')
  },[navigate])

  useEffect(()=>{
   async function validateLogin(){
    const storageData = window.localStorage.getItem('@dogs:app');
    if(storageData){

      const {token, user_nicename, user_email, user_display_name}:SigInResponse = JSON.parse(storageData)
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setUserData({
        name:user_display_name,
        userName:user_nicename,
        email:user_email,
      });
      try {
        setLoading(true);
        const isValid = await api.post('/jwt-auth/v1/token/validate');

      } catch (error) {
        signOut();
      }finally{
        setLoading(false)
      }

    }
   }

   validateLogin();
  },[signOut])


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
