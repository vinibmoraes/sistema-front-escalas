import { useState, useEffect, useCallback } from 'react';
import { Box } from '@mui/material';
import LoginHero from './components/LoginHero';
import LoginForm from './components/LoginForm';
import LoginFormSkeleton from './components/LoginFormSkeleton';
import LoginTransition from './components/LoginTransition';
import { useAuth } from '@/hooks';

export default function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const [showTransition, setShowTransition] = useState(false);
  const { navigateToHome } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoginSuccess = useCallback(() => {
    setShowTransition(true);
  }, []);

  const handleAnimationEnd = useCallback(() => {
    navigateToHome();
  }, [navigateToHome]);

  return (
    <>
      {showTransition && <LoginTransition onAnimationEnd={handleAnimationEnd} />}

      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'row',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          opacity: showTransition ? 0 : 1,
          transition: 'opacity 0.3s ease-out',
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            width: '50%',
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            borderTopRightRadius: 40,
            borderBottomRightRadius: 40,
          }}
        >
          <LoginHero />
        </Box>

        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 2, sm: 4 },
          }}
        >
          {isLoading ? (
            <LoginFormSkeleton />
          ) : (
            <LoginForm onLoginSuccess={handleLoginSuccess} />
          )}
        </Box>
      </Box>
    </>
  );
}
