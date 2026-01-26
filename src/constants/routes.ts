export const ROUTES = {
  // Public routes
  INDEX: '/',
  LOGIN: '/login',
  FORGOT_PASSWORD: '/recuperar-senha',
  ACCEPT_INVITE: '/aceitar-convite',

  // Protected routes
  HOME: '/inicio',
  REPORTS: '/relatorios',
  USERS: '/usuarios',
  MINISTRIES: '/ministerios',
  VOLUNTEERS: '/voluntarios',
  FAMILIES: '/familias',
  SCHEDULE: '/agenda',
  FIXED_EVENTS: '/eventos-fixos',
  SETTINGS: '/configuracoes',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
