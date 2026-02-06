import type { IRouteConfig } from './types';
import { EmptyFragment } from './EmptyFragment';
import { RouteNames } from '../constants/routes';
import Dashboard from '../pages/Dashboard';
import Planning from '../pages/Planning';

export const routes: IRouteConfig[] = [
    { path: RouteNames.DASHBOARD, element: Dashboard },
    { path: RouteNames.DASHBOARD_PLANNING, element: Planning },
    { path: RouteNames.PERSPECTIVES, element: EmptyFragment },
    { path: RouteNames.TASKS, element: EmptyFragment },
    { path: RouteNames.DOCUMENTS, element: EmptyFragment },
    { path: RouteNames.REPORTS, element: EmptyFragment },
    { path: RouteNames.USERS_AND_ROLES, element: EmptyFragment },
];
