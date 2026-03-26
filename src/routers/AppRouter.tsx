import { MainLayout } from '@/layouts/MainLayout';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainPage = lazy(() =>
  import('../pages/MainPage/MainPage').then(module => ({
    default: module.MainPage,
  })),
);
const ProfilePage = lazy(() =>
  import('../pages/ProfilePage/ProfilePage').then(module => ({
    default: module.ProfilePage,
  })),
);
const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage/NotFoundPage').then(module => ({
    default: module.NotFoundPage,
  })),
);

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<MainPage />} />
        <Route path='/profile/:id' element={<ProfilePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
