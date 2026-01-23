// Interfaces TypeScript

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'coordinator' | 'volunteer';
  status: 'active' | 'inactive' | 'pending';
  avatar?: string;
  createdAt: string;
}

export interface Ministry {
  id: number;
  name: string;
  description: string;
  color: string;
  leader: string;
  volunteersCount: number;
  status: 'active' | 'inactive';
  createdAt: string;
}

export interface Volunteer {
  id: number;
  name: string;
  email: string;
  phone: string;
  ministries: string[];
  status: 'active' | 'inactive';
  avatar?: string;
  familyId?: number;
  createdAt: string;
}

export interface Family {
  id: number;
  name: string;
  members: number;
  contact: string;
  address: string;
  createdAt: string;
}

export interface ScheduleEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  ministry: string;
  color: string;
  volunteers: string[];
  description?: string;
}

export interface FixedEvent {
  id: number;
  name: string;
  dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sunday
  time: string;
  ministry: string;
  color: string;
  recurrence: 'weekly' | 'biweekly' | 'monthly';
  volunteers: string[];
}

export interface DashboardStats {
  totalVolunteers: number;
  activeMinistries: number;
  upcomingEvents: number;
  totalFamilies: number;
  totalUsers: number;
}

// Mock Data

export const mockUsers: User[] = [
  {
    id: 1,
    name: 'João Silva',
    email: 'joao.silva@igreja.com',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-15',
  },
  {
    id: 2,
    name: 'Maria Santos',
    email: 'maria.santos@igreja.com',
    role: 'coordinator',
    status: 'active',
    createdAt: '2024-02-20',
  },
  {
    id: 3,
    name: 'Pedro Oliveira',
    email: 'pedro.oliveira@igreja.com',
    role: 'volunteer',
    status: 'active',
    createdAt: '2024-03-10',
  },
  {
    id: 4,
    name: 'Ana Costa',
    email: 'ana.costa@igreja.com',
    role: 'volunteer',
    status: 'pending',
    createdAt: '2024-04-05',
  },
  {
    id: 5,
    name: 'Carlos Ferreira',
    email: 'carlos.ferreira@igreja.com',
    role: 'coordinator',
    status: 'inactive',
    createdAt: '2024-01-25',
  },
];

export const mockMinistries: Ministry[] = [
  {
    id: 1,
    name: 'Louvor',
    description: 'Ministério de música e adoração',
    color: '#1a9185',
    leader: 'Maria Santos',
    volunteersCount: 12,
    status: 'active',
    createdAt: '2024-01-10',
  },
  {
    id: 2,
    name: 'Infantil',
    description: 'Ministério com crianças',
    color: '#f59e0b',
    leader: 'Ana Costa',
    volunteersCount: 8,
    status: 'active',
    createdAt: '2024-01-15',
  },
  {
    id: 3,
    name: 'Jovens',
    description: 'Ministério de jovens',
    color: '#8b5cf6',
    leader: 'Pedro Oliveira',
    volunteersCount: 15,
    status: 'active',
    createdAt: '2024-01-20',
  },
  {
    id: 4,
    name: 'Comunicação',
    description: 'Transmissão e mídias sociais',
    color: '#0ea5e9',
    leader: 'Carlos Ferreira',
    volunteersCount: 6,
    status: 'active',
    createdAt: '2024-02-01',
  },
  {
    id: 5,
    name: 'Recepção',
    description: 'Acolhimento de visitantes',
    color: '#ec4899',
    leader: 'João Silva',
    volunteersCount: 10,
    status: 'active',
    createdAt: '2024-02-10',
  },
  {
    id: 6,
    name: 'Intercessão',
    description: 'Ministério de oração',
    color: '#22c55e',
    leader: 'Maria Santos',
    volunteersCount: 7,
    status: 'active',
    createdAt: '2024-02-15',
  },
];

export const mockVolunteers: Volunteer[] = [
  {
    id: 1,
    name: 'João Silva',
    email: 'joao.silva@igreja.com',
    phone: '(11) 98765-4321',
    ministries: ['Louvor', 'Recepção'],
    status: 'active',
    createdAt: '2024-01-15',
  },
  {
    id: 2,
    name: 'Maria Santos',
    email: 'maria.santos@igreja.com',
    phone: '(11) 98765-4322',
    ministries: ['Louvor', 'Intercessão'],
    status: 'active',
    createdAt: '2024-01-20',
  },
  {
    id: 3,
    name: 'Pedro Oliveira',
    email: 'pedro.oliveira@igreja.com',
    phone: '(11) 98765-4323',
    ministries: ['Jovens'],
    status: 'active',
    createdAt: '2024-02-01',
  },
  {
    id: 4,
    name: 'Ana Costa',
    email: 'ana.costa@igreja.com',
    phone: '(11) 98765-4324',
    ministries: ['Infantil'],
    status: 'active',
    createdAt: '2024-02-10',
  },
  {
    id: 5,
    name: 'Carlos Ferreira',
    email: 'carlos.ferreira@igreja.com',
    phone: '(11) 98765-4325',
    ministries: ['Comunicação'],
    status: 'inactive',
    createdAt: '2024-02-15',
  },
];

export const mockFamilies: Family[] = [
  {
    id: 1,
    name: 'Família Silva',
    members: 4,
    contact: 'João Silva',
    address: 'Rua das Flores, 123',
    createdAt: '2024-01-15',
  },
  {
    id: 2,
    name: 'Família Santos',
    members: 3,
    contact: 'Maria Santos',
    address: 'Av. Principal, 456',
    createdAt: '2024-02-01',
  },
  {
    id: 3,
    name: 'Família Oliveira',
    members: 5,
    contact: 'Pedro Oliveira',
    address: 'Rua do Comércio, 789',
    createdAt: '2024-02-10',
  },
  {
    id: 4,
    name: 'Família Costa',
    members: 2,
    contact: 'Ana Costa',
    address: 'Rua da Igreja, 321',
    createdAt: '2024-02-20',
  },
];

export const mockScheduleEvents: ScheduleEvent[] = [
  {
    id: 1,
    title: 'Culto de Domingo',
    date: '2026-01-25',
    time: '10:00',
    ministry: 'Louvor',
    color: '#1a9185',
    volunteers: ['João Silva', 'Maria Santos'],
    description: 'Culto principal de domingo',
  },
  {
    id: 2,
    title: 'Escola Dominical',
    date: '2026-01-25',
    time: '09:00',
    ministry: 'Infantil',
    color: '#f59e0b',
    volunteers: ['Ana Costa'],
    description: 'Aula para crianças',
  },
  {
    id: 3,
    title: 'Reunião de Jovens',
    date: '2026-01-26',
    time: '19:30',
    ministry: 'Jovens',
    color: '#8b5cf6',
    volunteers: ['Pedro Oliveira'],
    description: 'Encontro semanal de jovens',
  },
  {
    id: 4,
    title: 'Culto de Quarta',
    date: '2026-01-28',
    time: '20:00',
    ministry: 'Louvor',
    color: '#1a9185',
    volunteers: ['Maria Santos'],
    description: 'Culto de meio de semana',
  },
];

export const mockFixedEvents: FixedEvent[] = [
  {
    id: 1,
    name: 'Culto de Domingo - Manhã',
    dayOfWeek: 0,
    time: '10:00',
    ministry: 'Louvor',
    color: '#1a9185',
    recurrence: 'weekly',
    volunteers: ['João Silva', 'Maria Santos'],
  },
  {
    id: 2,
    name: 'Escola Dominical',
    dayOfWeek: 0,
    time: '09:00',
    ministry: 'Infantil',
    color: '#f59e0b',
    recurrence: 'weekly',
    volunteers: ['Ana Costa'],
  },
  {
    id: 3,
    name: 'Reunião de Jovens',
    dayOfWeek: 1,
    time: '19:30',
    ministry: 'Jovens',
    color: '#8b5cf6',
    recurrence: 'weekly',
    volunteers: ['Pedro Oliveira'],
  },
  {
    id: 4,
    name: 'Culto de Quarta',
    dayOfWeek: 3,
    time: '20:00',
    ministry: 'Louvor',
    color: '#1a9185',
    recurrence: 'weekly',
    volunteers: ['Maria Santos'],
  },
  {
    id: 5,
    name: 'Culto de Sexta',
    dayOfWeek: 5,
    time: '20:00',
    ministry: 'Louvor',
    color: '#1a9185',
    recurrence: 'weekly',
    volunteers: ['João Silva'],
  },
];

export const mockDashboardStats: DashboardStats = {
  totalVolunteers: 51,
  activeMinistries: 6,
  upcomingEvents: 12,
  totalFamilies: 28,
  totalUsers: 15,
};

export const colorOptions = [
  '#1a9185',  // Teal
  '#f59e0b',  // Amber
  '#8b5cf6',  // Violet
  '#0ea5e9',  // Sky
  '#ec4899',  // Pink
  '#22c55e',  // Green
  '#ef4444',  // Red
  '#6366f1',  // Indigo
];

export const statusColors = {
  active: {
    bg: '#dcfce7',
    color: '#16a34a',
    label: 'Ativo',
  },
  inactive: {
    bg: '#fee2e2',
    color: '#dc2626',
    label: 'Inativo',
  },
  pending: {
    bg: '#fef3c7',
    color: '#d97706',
    label: 'Pendente',
  },
};

export const dayOfWeekLabels = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
];
