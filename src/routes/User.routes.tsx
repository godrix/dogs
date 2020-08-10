import React from 'react';

import { Routes, Route } from 'react-router-dom';
import {Feed} from '../pages/Feed';
import UserPhotoPost from '../pages/UserPhotoPost';
import UserStats from '../pages/UserStats';

export const UserRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Feed/>} />
      <Route path="/create" element={<UserPhotoPost/>} />
      <Route path="/stats" element={<UserStats/>} />
    </Routes>
  )
}
