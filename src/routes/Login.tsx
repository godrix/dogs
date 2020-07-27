import React from 'react';
import {Routes, Route} from 'react-router-dom';

import SigIn from '../pages/SigIn';
import SigUp from '../pages/SigUp';
import LostPass from '../pages/LostPass';
import ResetPass from '../pages/ResetPass';
// import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SigIn/>}/>
        <Route path="/create" element={<SigUp/>}/>
        <Route path="/lost-password" element={<LostPass/>}/>
        <Route path="/reset-password" element={<ResetPass/>}/>
      </Routes>
    </div>
  );
}

export default Login;