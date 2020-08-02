import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {GlobalStyle} from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import {StorageProvider} from './contexts/StorageContext';

import Home from './pages/Home';
import AccountUser from './pages/AccountUser';
import Login from './routes/Login';

function App() {
  return (
    <BrowserRouter>
    <StorageProvider>
    <GlobalStyle/>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='login/*' element={<Login/>} />
          <PrivateRoute path='account/*' element={<AccountUser/>} />
        </Routes>
      <Footer/>
      </StorageProvider>
    </BrowserRouter>
  );
}

export default App;
