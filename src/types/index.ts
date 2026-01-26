export type UserRole = 'admin' | 'coordinator' | 'volunteer';
export type Status = 'active' | 'inactive' | 'pending';
export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type Recurrence = 'weekly' | 'biweekly' | 'monthly';

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: Status;
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
  status: Exclude<Status, 'pending'>;
  createdAt: string;
}

export interface Volunteer {
  id: number;
  name: string;
  email: string;
  phone: string;
  ministries: string[];
  status: Exclude<Status, 'pending'>;
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
  dayOfWeek: DayOfWeek;
  time: string;
  ministry: string;
  color: string;
  recurrence: Recurrence;
  volunteers: string[];
}

export interface DashboardStats {
  totalVolunteers: number;
  activeMinistries: number;
  upcomingEvents: number;
  totalFamilies: number;
  totalUsers: number;
}

export interface ApiResponse<T> {
  data: T;
}

export interface MessageResponse {
  message: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export type CreateUserData = Omit<User, 'id' | 'createdAt'>;
export type UpdateUserData = Partial<CreateUserData>;

export type CreateMinistryData = Omit<Ministry, 'id' | 'createdAt'>;
export type UpdateMinistryData = Partial<CreateMinistryData>;

export type CreateVolunteerData = Omit<Volunteer, 'id' | 'createdAt'>;
export type UpdateVolunteerData = Partial<CreateVolunteerData>;

export type CreateFamilyData = Omit<Family, 'id' | 'createdAt'>;
export type UpdateFamilyData = Partial<CreateFamilyData>;

export type CreateScheduleEventData = Omit<ScheduleEvent, 'id'>;
export type UpdateScheduleEventData = Partial<CreateScheduleEventData>;

export type CreateFixedEventData = Omit<FixedEvent, 'id'>;
export type UpdateFixedEventData = Partial<CreateFixedEventData>;
