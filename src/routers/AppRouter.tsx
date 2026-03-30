import { MainLayout } from '@/layouts/MainLayout';
import { Loader } from '@/components/Loader';
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainPage, EditPage, NotFoundPage } from './lazyComponents';

export const AppRouter = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Loader />}>
            <MainPage />
          </Suspense>
        ),
      },
      {
        path: '/edit/:id',
        element: (
          <Suspense fallback={<Loader />}>
            <EditPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<Loader />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);
