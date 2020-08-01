import React, { FormEvent } from 'react';
import {Link} from 'react-router-dom'
import Input from '../../components/Input';
import Button from '../../components/Button';
import LinkButton from '../../components/LinkButton';

import {useStorage} from '../../contexts/StorageContext'
import { useForm } from '../../hooks/useForm';
import { Container, Register } from './styles';

const SigIn: React.FC = () => {
  const username = useForm({ type: false });
  const password = useForm({ type: false });

  const {signIn, loading} = useStorage();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      signIn({
          username: username.value,
          password: password.value
        });
      }
    }


  return (
    <Container className="animeLeft">
      <h1 className="title">Login </h1>
      <form className="form" onSubmit={handleSubmit}>
        <Input label="Usuario" name="user" type="text" {...username} />
        <Input label="Senha" name="password" type="text" {...password} />
        <Button loading={loading}>Entrar</Button>
      </form>
      <Link to="/login/lost-password" className="lostPass">
        Perdeu a senha?
      </Link>
      <Register>
        <h2 className="subTitle">
          Cadastre-se
        </h2>
        <p>Ainda não possui conta? Cadastre-se agora!</p>
        <LinkButton to="/login/create">Cadastro</LinkButton>
      </Register>
    </Container>
  );
}

export default SigIn;
