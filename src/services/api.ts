import axios from 'axios';
import {
  mockUsers,
  mockMinistries,
  mockVolunteers,
  mockFamilies,
  mockScheduleEvents,
  mockFixedEvents,
  mockDashboardStats,
} from '@/data/mockData';

// Create axios instance
const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Mock API Functions

// Auth
export const authAPI = {
  login: async (email: string, password: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = mockUsers.find((u) => u.email === email);
        if (user) {
          resolve({
            data: {
              token: 'mock_token_' + Date.now(),
              user: user,
            },
          });
        } else {
          resolve({
            data: {
              token: 'mock_token_' + Date.now(),
              user: mockUsers[0],
            },
          });
        }
      }, 1000);
    });
  },
  logout: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { message: 'Logout successful' } });
      }, 500);
    });
  },
  forgotPassword: async (email: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { message: 'Password reset email sent' } });
      }, 1000);
    });
  },
};

// Dashboard
export const dashboardAPI = {
  getStats: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockDashboardStats });
      }, 500);
    });
  },
  getUpcomingEvents: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockScheduleEvents.slice(0, 5) });
      }, 500);
    });
  },
};

// Users
export const usersAPI = {
  getAll: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockUsers });
      }, 500);
    });
  },
  getById: async (id: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = mockUsers.find((u) => u.id === id);
        resolve({ data: user });
      }, 500);
    });
  },
  create: async (userData: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { ...userData, id: Date.now() } });
      }, 500);
    });
  },
  update: async (id: number, userData: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { ...userData, id } });
      }, 500);
    });
  },
  delete: async (id: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { message: 'User deleted' } });
      }, 500);
    });
  },
};

// Ministries
export const ministriesAPI = {
  getAll: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockMinistries });
      }, 500);
    });
  },
  getById: async (id: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const ministry = mockMinistries.find((m) => m.id === id);
        resolve({ data: ministry });
      }, 500);
    });
  },
  create: async (ministryData: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { ...ministryData, id: Date.now() } });
      }, 500);
    });
  },
  update: async (id: number, ministryData: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { ...ministryData, id } });
      }, 500);
    });
  },
  delete: async (id: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { message: 'Ministry deleted' } });
      }, 500);
    });
  },
};

// Volunteers
export const volunteersAPI = {
  getAll: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockVolunteers });
      }, 500);
    });
  },
  getById: async (id: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const volunteer = mockVolunteers.find((v) => v.id === id);
        resolve({ data: volunteer });
      }, 500);
    });
  },
  create: async (volunteerData: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { ...volunteerData, id: Date.now() } });
      }, 500);
    });
  },
  update: async (id: number, volunteerData: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { ...volunteerData, id } });
      }, 500);
    });
  },
  delete: async (id: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { message: 'Volunteer deleted' } });
      }, 500);
    });
  },
};

// Families
export const familiesAPI = {
  getAll: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockFamilies });
      }, 500);
    });
  },
  getById: async (id: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const family = mockFamilies.find((f) => f.id === id);
        resolve({ data: family });
      }, 500);
    });
  },
  create: async (familyData: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { ...familyData, id: Date.now() } });
      }, 500);
    });
  },
  update: async (id: number, familyData: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { ...familyData, id } });
      }, 500);
    });
  },
  delete: async (id: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { message: 'Family deleted' } });
      }, 500);
    });
  },
};

// Schedule Events
export const scheduleAPI = {
  getAll: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockScheduleEvents });
      }, 500);
    });
  },
  getByDate: async (startDate: string, endDate: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = mockScheduleEvents.filter((event) => {
          return event.date >= startDate && event.date <= endDate;
        });
        resolve({ data: filtered });
      }, 500);
    });
  },
  create: async (eventData: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { ...eventData, id: Date.now() } });
      }, 500);
    });
  },
  update: async (id: number, eventData: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { ...eventData, id } });
      }, 500);
    });
  },
  delete: async (id: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { message: 'Event deleted' } });
      }, 500);
    });
  },
};

// Fixed Events
export const fixedEventsAPI = {
  getAll: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockFixedEvents });
      }, 500);
    });
  },
  create: async (eventData: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { ...eventData, id: Date.now() } });
      }, 500);
    });
  },
  update: async (id: number, eventData: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { ...eventData, id } });
      }, 500);
    });
  },
  delete: async (id: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { message: 'Fixed event deleted' } });
      }, 500);
    });
  },
};

export default api;
