import React, { FormEvent } from 'react';
import api from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {useStorage} from '../../contexts/StorageContext'
import { useForm } from '../../hooks/useForm';
// import { Container } from './styles';

const SigIn: React.FC = () => {
  const username = useForm({ type: false });
  const password = useForm({ type: false });

  const {sigIn} = useStorage();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
        sigIn({
          username: username.value, 
          password: password.value
        });
      }
    }


  return (
    <section>
      <h1>Login </h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuario" name="user" type="text" {...username} />
        <Input label="Senha" name="password" type="text" {...password} />
        <Button>Entrar</Button>
      </form>
    </section>
  );
}

export default SigIn;