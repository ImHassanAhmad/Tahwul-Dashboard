export const RouteNames = {
    NOT_FOUND: '*',
    DASHBOARD: 'dashboard',
    DASHBOARD_PLANNING: 'dashboard/planning',
    PERSPECTIVES: 'perspectives',
    TASKS: 'tasks',
    DOCUMENTS: 'documents',
    REPORTS: 'reports',
    USERS_AND_ROLES: 'users-and-roles',
} as const;

export type RoutePath = (typeof RouteNames)[keyof typeof RouteNames];
