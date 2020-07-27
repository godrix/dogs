import React, { FormEvent} from 'react';
import api from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {useForm} from '../../hooks/useForm';
// import { Container } from './styles';

const SigIn: React.FC = () => {
  const username = useForm({type:false});
  const password = useForm({type:'email'});

  function handleSubmit(event:FormEvent){
    api.post('/jwt-auth/v1/token',{
      username,
      password
    }).then(response =>{
      console.log(response)
    })
    event.preventDefault();
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuario" name="user" type="email" {...username}/>
        <Input label="Senha" name="password" type="email" {...password}/>
        <Button>Entrar</Button>
      </form>
    </section>
  );
}

export default SigIn;