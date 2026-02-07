import type { ComponentType, LazyExoticComponent } from 'react';

export interface IRouteConfig {
    path: string;
    params?: string;
    element: ComponentType | LazyExoticComponent<ComponentType>;
}

export interface IProtectedRouterProps {
    redirectPath?: string;
}
