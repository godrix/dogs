import React from 'react';

//import {} from '../../components/Header';

import { Container } from './styles';
import { UserHeader } from '../../components/UserHeader';

const AccountUser: React.FC = () => {
  return (
    <>
    <UserHeader/>
    <Container className="container">Ola usuario</Container>
    </>
  );
}

export default AccountUser;
