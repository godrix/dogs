import React from 'react';
import {Link} from 'react-router-dom'
import { Container } from './styles';

const Header: React.FC = () => {
  return (
  <Container>
    <nav className="container">
      <Link to="/">Home</Link>
      <Link to="/">Login / Cadastro</Link>
    </nav>
  </Container>);
}

export default Header;