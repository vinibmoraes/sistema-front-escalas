import axios from 'axios';
import { ROUTES } from '@/constants/routes';
import {
  mockUsers,
  mockMinistries,
  mockVolunteers,
  mockFamilies,
  mockScheduleEvents,
  mockFixedEvents,
  mockDashboardStats,
} from '@/data/mockData';
import type {
  User,
  Ministry,
  Volunteer,
  Family,
  ScheduleEvent,
  FixedEvent,
  DashboardStats,
  ApiResponse,
  AuthResponse,
  MessageResponse,
  CreateUserData,
  UpdateUserData,
  CreateMinistryData,
  UpdateMinistryData,
  CreateVolunteerData,
  UpdateVolunteerData,
  CreateFamilyData,
  UpdateFamilyData,
  CreateScheduleEventData,
  UpdateScheduleEventData,
  CreateFixedEventData,
  UpdateFixedEventData,
} from '@/types';

const MOCK_DELAY = 500;
const AUTH_DELAY = 1000;

const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
      window.location.href = ROUTES.LOGIN;
    }
    return Promise.reject(error);
  }
);

function mockResponse<T>(data: T, delay = MOCK_DELAY): Promise<ApiResponse<T>> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data }), delay);
  });
}

export const authAPI = {
  login: (email: string, _password: string): Promise<ApiResponse<AuthResponse>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = mockUsers.find((u) => u.email === email) ?? mockUsers[0];
        resolve({
          data: {
            token: `mock_token_${Date.now()}`,
            user,
          },
        });
      }, AUTH_DELAY);
    });
  },

  logout: (): Promise<ApiResponse<MessageResponse>> => {
    return mockResponse({ message: 'Logout successful' });
  },

  forgotPassword: (_email: string): Promise<ApiResponse<MessageResponse>> => {
    return mockResponse({ message: 'Password reset email sent' }, AUTH_DELAY);
  },
};

export const dashboardAPI = {
  getStats: (): Promise<ApiResponse<DashboardStats>> => {
    return mockResponse(mockDashboardStats);
  },

  getUpcomingEvents: (): Promise<ApiResponse<ScheduleEvent[]>> => {
    return mockResponse(mockScheduleEvents.slice(0, 5));
  },
};

export const usersAPI = {
  getAll: (): Promise<ApiResponse<User[]>> => {
    return mockResponse(mockUsers);
  },

  getById: (id: number): Promise<ApiResponse<User | undefined>> => {
    return mockResponse(mockUsers.find((u) => u.id === id));
  },

  create: (userData: CreateUserData): Promise<ApiResponse<User>> => {
    const newUser: User = {
      ...userData,
      id: Date.now(),
      createdAt: new Date().toISOString().split('T')[0],
    };
    return mockResponse(newUser);
  },

  update: (id: number, userData: UpdateUserData): Promise<ApiResponse<User>> => {
    const existingUser = mockUsers.find((u) => u.id === id);
    const updatedUser = { ...existingUser, ...userData, id } as User;
    return mockResponse(updatedUser);
  },

  delete: (_id: number): Promise<ApiResponse<MessageResponse>> => {
    return mockResponse({ message: 'User deleted' });
  },
};

export const ministriesAPI = {
  getAll: (): Promise<ApiResponse<Ministry[]>> => {
    return mockResponse(mockMinistries);
  },

  getById: (id: number): Promise<ApiResponse<Ministry | undefined>> => {
    return mockResponse(mockMinistries.find((m) => m.id === id));
  },

  create: (ministryData: CreateMinistryData): Promise<ApiResponse<Ministry>> => {
    const newMinistry: Ministry = {
      ...ministryData,
      id: Date.now(),
      createdAt: new Date().toISOString().split('T')[0],
    };
    return mockResponse(newMinistry);
  },

  update: (id: number, ministryData: UpdateMinistryData): Promise<ApiResponse<Ministry>> => {
    const existingMinistry = mockMinistries.find((m) => m.id === id);
    const updatedMinistry = { ...existingMinistry, ...ministryData, id } as Ministry;
    return mockResponse(updatedMinistry);
  },

  delete: (_id: number): Promise<ApiResponse<MessageResponse>> => {
    return mockResponse({ message: 'Ministry deleted' });
  },
};

export const volunteersAPI = {
  getAll: (): Promise<ApiResponse<Volunteer[]>> => {
    return mockResponse(mockVolunteers);
  },

  getById: (id: number): Promise<ApiResponse<Volunteer | undefined>> => {
    return mockResponse(mockVolunteers.find((v) => v.id === id));
  },

  create: (volunteerData: CreateVolunteerData): Promise<ApiResponse<Volunteer>> => {
    const newVolunteer: Volunteer = {
      ...volunteerData,
      id: Date.now(),
      createdAt: new Date().toISOString().split('T')[0],
    };
    return mockResponse(newVolunteer);
  },

  update: (id: number, volunteerData: UpdateVolunteerData): Promise<ApiResponse<Volunteer>> => {
    const existingVolunteer = mockVolunteers.find((v) => v.id === id);
    const updatedVolunteer = { ...existingVolunteer, ...volunteerData, id } as Volunteer;
    return mockResponse(updatedVolunteer);
  },

  delete: (_id: number): Promise<ApiResponse<MessageResponse>> => {
    return mockResponse({ message: 'Volunteer deleted' });
  },
};

export const familiesAPI = {
  getAll: (): Promise<ApiResponse<Family[]>> => {
    return mockResponse(mockFamilies);
  },

  getById: (id: number): Promise<ApiResponse<Family | undefined>> => {
    return mockResponse(mockFamilies.find((f) => f.id === id));
  },

  create: (familyData: CreateFamilyData): Promise<ApiResponse<Family>> => {
    const newFamily: Family = {
      ...familyData,
      id: Date.now(),
      createdAt: new Date().toISOString().split('T')[0],
    };
    return mockResponse(newFamily);
  },

  update: (id: number, familyData: UpdateFamilyData): Promise<ApiResponse<Family>> => {
    const existingFamily = mockFamilies.find((f) => f.id === id);
    const updatedFamily = { ...existingFamily, ...familyData, id } as Family;
    return mockResponse(updatedFamily);
  },

  delete: (_id: number): Promise<ApiResponse<MessageResponse>> => {
    return mockResponse({ message: 'Family deleted' });
  },
};

export const scheduleAPI = {
  getAll: (): Promise<ApiResponse<ScheduleEvent[]>> => {
    return mockResponse(mockScheduleEvents);
  },

  getByDateRange: (startDate: string, endDate: string): Promise<ApiResponse<ScheduleEvent[]>> => {
    const filtered = mockScheduleEvents.filter(
      (event) => event.date >= startDate && event.date <= endDate
    );
    return mockResponse(filtered);
  },

  create: (eventData: CreateScheduleEventData): Promise<ApiResponse<ScheduleEvent>> => {
    const newEvent: ScheduleEvent = {
      ...eventData,
      id: Date.now(),
    };
    return mockResponse(newEvent);
  },

  update: (id: number, eventData: UpdateScheduleEventData): Promise<ApiResponse<ScheduleEvent>> => {
    const existingEvent = mockScheduleEvents.find((e) => e.id === id);
    const updatedEvent = { ...existingEvent, ...eventData, id } as ScheduleEvent;
    return mockResponse(updatedEvent);
  },

  delete: (_id: number): Promise<ApiResponse<MessageResponse>> => {
    return mockResponse({ message: 'Event deleted' });
  },
};

export const fixedEventsAPI = {
  getAll: (): Promise<ApiResponse<FixedEvent[]>> => {
    return mockResponse(mockFixedEvents);
  },

  create: (eventData: CreateFixedEventData): Promise<ApiResponse<FixedEvent>> => {
    const newEvent: FixedEvent = {
      ...eventData,
      id: Date.now(),
    };
    return mockResponse(newEvent);
  },

  update: (id: number, eventData: UpdateFixedEventData): Promise<ApiResponse<FixedEvent>> => {
    const existingEvent = mockFixedEvents.find((e) => e.id === id);
    const updatedEvent = { ...existingEvent, ...eventData, id } as FixedEvent;
    return mockResponse(updatedEvent);
  },

  delete: (_id: number): Promise<ApiResponse<MessageResponse>> => {
    return mockResponse({ message: 'Fixed event deleted' });
  },
};

export default api;
