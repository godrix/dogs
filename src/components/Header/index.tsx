import React from 'react';
import {Link} from 'react-router-dom'
import {useStorage} from '../../contexts/StorageContext';
import {ReactComponent as Dogs} from '../../assets/dogs.svg';
import { Container } from './styles';

const Header: React.FC = () => {
  const {userData} = useStorage();
  return (
  <Container>
    <nav className="container">
      <Link to="/" aria-label="Dogs - Home">
        <Dogs/>
      </Link>
      {
        userData ? (
          <Link to="/acount" className="login">
            {userData?.name}
          </Link>
        ) : (
          <Link to="/login" className="login">Login / Cadastro</Link>
        )
      }
    </nav>
  </Container>);
}

export default Header;