import { Component, type ErrorInfo, type ReactNode } from 'react';
import styles from './ErrorBoundary.module.scss';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

function ErrorRecoveryButton() {
  const handleClick = () => {
    window.location.assign('/');
  };

  return (
    <button type='button' className={styles['error-boundary__button']} onClick={handleClick}>
      Домой
    </button>
  );
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.error(error.message);

    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(error, error.message);
    console.error(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className={styles['error-boundary']}>
          <div className='layout-container'>
            <div className={styles['error-boundary__content']}>
              <h2 className={styles['error-boundary__title']}>Упс! Что-то пошло не так.</h2>

              <ErrorRecoveryButton />
            </div>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
