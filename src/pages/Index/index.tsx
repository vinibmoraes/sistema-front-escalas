import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      navigate(ROUTES.HOME);
    } else {
      navigate(ROUTES.LOGIN);
    }
  }, [navigate]);

  return null;
}
