import { Box } from '@mui/material';
import LoginHero from './components/LoginHero';
import LoginForm from './components/LoginForm';

export default function Login() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        bgcolor: 'background.default',
      }}
    >
      <LoginHero />
      <LoginForm />
    </Box>
  );
}
