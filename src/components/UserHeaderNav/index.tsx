import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

import { useStorage } from '../../contexts/StorageContext';

import {ReactComponent as IconPhotos} from '../../assets/feed.svg';
import {ReactComponent as IconStats} from '../../assets/estatisticas.svg';
import {ReactComponent as IconAdd} from '../../assets/adicionar.svg';
import {ReactComponent as IconLogout} from '../../assets/sair.svg';

import {Container} from './styles';

const UserHeaderNav: React.FC = () => {
  const [mobile, setMobile] = useState(null);

  const {signOut} = useStorage();
  return (
    <Container>
      <NavLink to="/account"><IconPhotos/>
      {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/account/stats"><IconStats/>
      {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/account/post"><IconAdd/>
      {mobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={signOut}><IconLogout/>
      {mobile && 'Sair'}
      </button>
    </Container>
  );
}

export default UserHeaderNav;
