import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '@/services/api';
import { useToast } from './useToast';
import { ROUTES } from '@/constants/routes';
import type { User, ApiResponse, AuthResponse } from '@/types';

interface UseAuthOptions {
  onLoginSuccess?: () => void;
}

interface UseAuthReturn {
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  navigateToHome: () => void;
  isLoading: boolean;
  user: User | null;
}

export function useAuth(options?: UseAuthOptions): UseAuthReturn {
  const { onLoginSuccess } = options || {};
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const navigateToHome = useCallback(() => {
    navigate(ROUTES.HOME, { replace: true });
  }, [navigate]);

  const login = useCallback(async (email: string, password: string): Promise<boolean> => {
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

      if (onLoginSuccess) {
        onLoginSuccess();
      } else {
        navigateToHome();
      }

      return true;
    } catch {
      toast({
        title: 'Erro ao fazer login',
        description: 'Verifique suas credenciais e tente novamente.',
        variant: 'destructive',
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [toast, onLoginSuccess, navigateToHome]);

  const logout = useCallback(() => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    setUser(null);
    navigate(ROUTES.LOGIN, { replace: true });
  }, [navigate]);

  return { login, logout, navigateToHome, isLoading, user };
}
