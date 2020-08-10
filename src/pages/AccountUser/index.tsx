import React from 'react';

//import {} from '../../components/Header';

import { Container } from './styles';
import { UserHeader } from '../../components/UserHeader';
import { UserRoutes } from '../../routes/User.routes';

const AccountUser: React.FC = () => {
  return (
    <>
    <UserHeader/>
    <UserRoutes/>
    <Container className="container">Ola usuario</Container>
    </>
  );
}

export default AccountUser;
