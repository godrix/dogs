import React, {useState, FormEvent} from 'react';
import api from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';
// import { Container } from './styles';

const SigIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
        <Input label="Usuario" name="user" type="text" value={username} onChange={({target})=>{setUsername(target.value)}}/>
        <Input label="Senha" name="password" type="password" value={password} onChange={({target})=>{setPassword(target.value)}}/>
        <Button>Entrar</Button>
      </form>
    </section>
  );
}

export default SigIn;