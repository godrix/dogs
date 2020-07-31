import React, {createContext, useContext, useEffect, useState} from 'react';
import api from '../../services/api';
// import { Container } from './styles';

interface StorageContextData {
signed:boolean;
sigIn:({username, password}:SigInRequest)=>Promise<void>;
userData:UserData | null;
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

  async function sigIn({username, password}:SigInRequest) {
    try {
      const response = await api.post('/jwt-auth/v1/token', {
        username,
        password
      });
  
      window.localStorage.setItem('@dogs:token', response.data.json.token);
      api.defaults.headers.common['Authorization'] = `Bearer ${response.data.json.token}`;

      getUserInfo();
    } catch (error) {
      alert('Ocorreu um erro ao realizar o login');
    }
  }

  async function getUserInfo() {
    try {
      const response = await api.get('/api/user');
      setUserData(response.data);
    } catch (error) {
      alert('Ocorreu um erro ao obter os dados do usuario');
    }
  }

  useEffect(()=>{
    const token = window.localStorage.getItem('@dogs:token');
    if(token){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      getUserInfo();
    }
  },[])


  return (
  <StorageContext.Provider value={{signed: !!userData, sigIn, userData}}>
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
