import React from 'react';

import UserHeaderNav from '../UserHeaderNav';

import { Container } from './styles';

export const UserHeader: React.FC = () => {
  return (
    <Container>
      <h1 className="title">Titulo</h1>
      <UserHeaderNav/>
    </Container>
  );
}

