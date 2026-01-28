import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import LoginHero from './components/LoginHero';
import LoginForm from './components/LoginForm';
import LoginFormSkeleton from './components/LoginFormSkeleton';

export default function Login() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      }}
    >
      {/* Lado esquerdo - Hero com planeta (escondido no mobile) */}
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

      {/* Lado direito - Formulário */}
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
        {isLoading ? <LoginFormSkeleton /> : <LoginForm />}
      </Box>
    </Box>
  );
}
