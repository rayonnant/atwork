import { Component, type ErrorInfo, type ReactNode } from 'react';

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
                <div>
                        <h2>
                            Упс! Что-то пошло не так.
                        </h2>

                        <button onClick={() => window.location.reload()}>
                            Попробовать снова
                        </button>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
