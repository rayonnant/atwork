import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import { Loader } from '@components/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainHeader } from '@components/MainHeader';

export const MainLayout: React.FC = () => {
  return (
    <ErrorBoundary>
      <MainHeader />
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  );
};
