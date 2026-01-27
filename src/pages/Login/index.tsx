import { Box } from '@mui/material';
import LoginHero from './components/LoginHero';
import LoginForm from './components/LoginForm';

export default function Login() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Fundo animado ocupando tudo */}
      <LoginHero />

      {/* Formulário por cima */}
      <Box
        sx={{
          position: { xs: 'relative', md: 'absolute' },
          right: { md: 0 },
          top: { md: 0 },
          bottom: { md: 0 },
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }}
      >
        <LoginForm />
      </Box>
    </Box>
  );
}
