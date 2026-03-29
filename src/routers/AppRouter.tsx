import { MainLayout } from '@/layouts/MainLayout';
import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const MainPage = lazy(() =>
  import('../pages/MainPage/MainPage').then(module => ({
    default: module.MainPage,
  })),
);
const EditPage = lazy(() =>
  import('../pages/EditPage/EditPage').then(module => ({
    default: module.EditPage,
  })),
);
const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage/NotFoundPage').then(module => ({
    default: module.NotFoundPage,
  })),
);

export const AppRouter = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={null}>
            <MainPage />
          </Suspense>
        ),
      },
      {
        path: '/edit/:id',
        element: (
          <Suspense fallback={null}>
            <EditPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={null}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);
