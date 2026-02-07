import { type FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './RoutesPath';
import type { IRouteConfig } from './types';
import Redirect from './RedirectRoute';
import Layout from '../Layout';

const PageFallback: FC = () => (
    <div className="flex min-h-[200px] items-center justify-center bg-[#F5F8FA]" aria-label="Loading">
        <span className="text-sm text-[#8597A8]">Loading…</span>
    </div>
);

const AppRoutes: FC = () => {
    return (
        <Suspense fallback={<PageFallback />}>
            <Routes>
                <Route path="/" element={<Redirect />} />
                {routes.map(({ path, element: Element, params }: IRouteConfig) => (
                    <Route
                        key={path}
                        path={`${path}${params ?? ''}`}
                        element={
                            <Layout>
                                <Element />
                            </Layout>
                        }
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
