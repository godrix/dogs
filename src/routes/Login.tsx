import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import SigIn from '../pages/SigIn';
import SigUp from '../pages/SigUp';
import LostPass from '../pages/LostPass';
import ResetPass from '../pages/ResetPass';

import {useStorage} from '../contexts/StorageContext'

const Login: React.FC = () => {
  const {signed} = useStorage();

  if(signed) return <Navigate to="/count" />
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