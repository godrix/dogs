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
    <section className="login">
      <div className="forms">
      <Routes>
        <Route path="/" element={<SigIn/>}/>
        <Route path="/create" element={<SigUp/>}/>
        <Route path="/lost-password" element={<LostPass/>}/>
        <Route path="/reset-password" element={<ResetPass/>}/>
      </Routes>
      </div>
    </section>
  );
}

export default Login;
