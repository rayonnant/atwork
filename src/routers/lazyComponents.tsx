import { lazy } from 'react';

export const MainPage = lazy(() =>
  import('../pages/MainPage/MainPage').then(module => ({
    default: module.MainPage,
  })),
);
export const EditPage = lazy(() =>
  import('../pages/EditPage/EditPage').then(module => ({
    default: module.EditPage,
  })),
);
export const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage/NotFoundPage').then(module => ({
    default: module.NotFoundPage,
  })),
);
