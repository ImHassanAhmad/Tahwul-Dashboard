import { RouteNames } from '../../constants/routes';

export const IconsVariant = {
    Dashboard: 'dashboard',
    Perspective: 'perspective',
    Task: 'task',
    Document: 'document',
    Report: 'report',
    User: 'user',
    Role: 'role',
    Menu: 'menu',
    Search: 'search',
    Notification: 'notification',
    ArrowDown: 'arrow-down',
} as const;

export type IconsVariant = (typeof IconsVariant)[keyof typeof IconsVariant];

export const SIDEBAR_ROUTE_MAP: Record<string, string> = {
    Dashboard: `/${RouteNames.DASHBOARD}`,
    Perspectives: `/${RouteNames.PERSPECTIVES}`,
    Tasks: `/${RouteNames.TASKS}`,
    Documents: `/${RouteNames.DOCUMENTS}`,
    Reports: `/${RouteNames.REPORTS}`,
    'Users & Roles': `/${RouteNames.USERS_AND_ROLES}`,
};

export const getRouteForLabel = (label: string): string => SIDEBAR_ROUTE_MAP[label] ?? `/${label.toLowerCase().replace(/\s+/g, '-')}`;

export const sidebarItems = [
    { icon: IconsVariant.Dashboard, label: 'Dashboard' },
    { icon: IconsVariant.Perspective, label: 'Perspectives' },
    { icon: IconsVariant.Task, label: 'Tasks' },
    { icon: IconsVariant.Document, label: 'Documents' },
    { icon: IconsVariant.Report, label: 'Reports' },
    { icon: IconsVariant.User, label: 'Users & Roles' },
];
