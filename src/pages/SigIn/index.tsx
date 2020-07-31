import React, { FormEvent, useEffect} from 'react';
import api from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {useForm} from '../../hooks/useForm';
// import { Container } from './styles';

const SigIn: React.FC = () => {
  const username = useForm({type:false});
  const password = useForm({type:false});

  async function getUser(){
    await api.get('/api/user')
  }

  async function handleSubmit(event:FormEvent){
    event.preventDefault();

    if(username.validate() && password.validate()){
      try {
        const response = await api.post('/jwt-auth/v1/token',{
          username: username.value,
          password: password.value
        });

        window.localStorage.setItem('@dogs:token', response.data.json);
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.json}`;
        getUser();
      } catch (error) {
        
      }

      
    }

  }

  useEffect(()=>{
    const token = window.localStorage.getItem('@dogs:token');

    if(token){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      getUser();

    }

  },[])

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuario" name="user" type="text" {...username}/>
        <Input label="Senha" name="password" type="text" {...password}/>
        <Button>Entrar</Button>
      </form>
    </section>
  );
}

export default SigIn;