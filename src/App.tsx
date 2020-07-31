import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {GlobalStyle} from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import {StorageProvider} from './contexts/StorageContext';

import Home from './pages/Home'
import Login from './routes/Login'

function App() {
  return (
    <BrowserRouter>
    <StorageProvider>
    <GlobalStyle/>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login/*' element={<Login/>} /> 
        </Routes>
      <Footer/>
      </StorageProvider>
    </BrowserRouter>
  );
}

export default App;
