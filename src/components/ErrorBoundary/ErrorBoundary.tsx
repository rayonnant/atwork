import { Component, type ErrorInfo, type ReactNode } from 'react';
import styles from './ErrorBoundary.module.scss';
import {Link} from "react-router-dom";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
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
          <div className='wrapper'>
            <div className={styles['error-boundary__content']}>
              <h2 className={styles['error-boundary__title']}>Упс! Что-то пошло не так.</h2>

              <Link to='/' className={styles['error-boundary__button']} >
                Домой
              </Link>
            </div>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
