import React, {useState, FormEvent} from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {useForm} from '../../hooks/useForm';
import {useStorage} from '../../contexts/StorageContext';

import api from '../../services/api';

import { Container } from './styles';

const SigUp: React.FC = () => {
  const username = useForm({type:false})
  const email = useForm({type:'email'})
  const password = useForm({type:false});
  const {signIn, loading} = useStorage();
  const [load, setLoad] = useState(false)

  const handleSubmit = async(event:FormEvent)=>{
    event.preventDefault();

    try {
      setLoad(true)
      const response = await api.post('/api/user', {
        username:username.value,
        email:email.value,
        password:password.value
      });

      signIn({username:username.value, password:password.value})
    } catch (error) {
      alert('Ocorreu um erro ao criar a conta')
    } finally{
      setLoad(false)
    }

  }
  return (
  <Container className="animeLeft">
    <h1 className="title">Cadastre-se</h1>
    <form onSubmit={handleSubmit}>
      <Input label="Usuário" type="text" name="username" {...username}/>
      <Input label="E-mail" type="email" name="email" {...email}/>
      <Input label="Senha" type="password" name="password" {...password}/>
      <Button loading={loading || load}>Cadastrar</Button>
    </form>
  </Container>
  );
}

export default SigUp;
