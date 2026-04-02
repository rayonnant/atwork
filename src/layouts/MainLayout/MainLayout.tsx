import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import { Loader } from '@components/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainHeader } from '@components/MainHeader';

export function MainLayout() {
  return (
    <ErrorBoundary>
      <MainHeader />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  );
}
