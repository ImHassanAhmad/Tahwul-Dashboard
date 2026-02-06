import { type FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './RoutesPath';
import type { IRouteConfig } from './types';
import Redirect from './RedirectRoute';
import Layout from '../Layout';

const AppRoutes: FC = () => {
    return (
        <>
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
        </>
    );
};

export default AppRoutes;
