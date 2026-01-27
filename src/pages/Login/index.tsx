import { Box } from '@mui/material';
import LoginHero from './components/LoginHero';
import LoginForm from './components/LoginForm';

export default function Login() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      }}
    >
      {/* Lado esquerdo - Hero com planeta */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          minHeight: { xs: '40vh', md: '100vh' },
          position: 'relative',
          overflow: 'hidden',
          borderTopRightRadius: { xs: 0, md: 40 },
          borderBottomRightRadius: { xs: 0, md: 40 },
        }}
      >
        <LoginHero />
      </Box>

      {/* Lado direito - Formulário com fundo branco */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          minHeight: { xs: '60vh', md: '100vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <LoginForm />
      </Box>
    </Box>
  );
}
