import React from 'react';
import {Link} from 'react-router-dom'
import { Container } from './styles';
import {ReactComponent as Dogs} from '../../assets/dogs.svg';

const Header: React.FC = () => {
  return (
  <Container>
    <nav className="container">
      <Link to="/" aria-label="Dogs - Home">
        <Dogs/>
      </Link>
      <Link to="/" className="login">Login / Cadastro</Link>
    </nav>
  </Container>);
}

export default Header;