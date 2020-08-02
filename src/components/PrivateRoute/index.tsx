import React, { ReactElement } from 'react';
import {Route, Navigate, BrowserRouterProps} from 'react-router-dom';
import {useStorage} from '../../contexts/StorageContext'

// import { Container } from './styles';

interface RoutesProps {
  path:string;
  element?:ReactElement;
}

const PrivateRoute: React.FC<RoutesProps> = ({path, element: Element}) => {
  const {signed} = useStorage();

  return signed ?  <Route path={path} element={Element}/> : <Navigate to="/login"/>;

}

export default PrivateRoute;
