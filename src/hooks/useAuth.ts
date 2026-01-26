import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '@/services/api';
import { useToast } from './useToast';
import { ROUTES } from '@/constants/routes';
import type { User, ApiResponse, AuthResponse } from '@/types';

interface UseAuthReturn {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  user: User | null;
}

export function useAuth(): UseAuthReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response: ApiResponse<AuthResponse> = await authAPI.login(email, password);
      localStorage.setItem('auth_token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      setUser(response.data.user);
      toast({
        title: 'Login realizado com sucesso!',
        variant: 'success',
      });
      navigate(ROUTES.HOME);
    } catch {
      toast({
        title: 'Erro ao fazer login',
        description: 'Verifique suas credenciais e tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }, [navigate, toast]);

  const logout = useCallback(() => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    setUser(null);
    navigate(ROUTES.LOGIN);
  }, [navigate]);

  return { login, logout, isLoading, user };
}
