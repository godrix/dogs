import React, {useState, FormEvent} from 'react';
import api from '../../services/api';
// import { Container } from './styles';

const SigIn: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');

  function handleSubmit(event:FormEvent){
    api.post('/jwt-auth/v1/token',{
      username:userName,
      password:userPass
    }).then(response =>{
      console.log(response)
    })
    event.preventDefault();
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userName} onChange={({target})=>{setUserName(target.value)}}/>
        <input type="text" value={userPass} onChange={({target})=>{setUserPass(target.value)}}/>
        <button>Entrar</button>
      </form>
    </section>
  );
}

export default SigIn;