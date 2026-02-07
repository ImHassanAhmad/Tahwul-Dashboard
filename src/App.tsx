import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './pages/ErrorFallback';

function App(): ReactNode {
    return (
        <>
            <BrowserRouter>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <AppRoutes />
                </ErrorBoundary>
            </BrowserRouter>
        </>
    );
}

export default App;
