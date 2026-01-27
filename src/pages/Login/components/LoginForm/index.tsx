import { useState } from 'react';
import { Box, TextField, Button, Divider, Link as MuiLink, keyframes } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import CustomText from '@/components/CustomText';
import { useAuth } from '@/hooks';
import { ROUTES } from '@/constants/routes';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
`;

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 420,
        p: { xs: 3, sm: 4 },
      }}
    >
      <Box sx={{ animation: `${slideInRight} 0.5s ease-out` }}>
        <CustomText variant="h4" weight={700} color="#1a2a4a" sx={{ mb: 1 }}>
          Bem-vindo
        </CustomText>
      </Box>

      <Box sx={{ animation: `${slideInRight} 0.5s ease-out`, animationDelay: '0.1s', animationFillMode: 'both' }}>
        <CustomText color="#64748b" size="1rem" sx={{ mb: 4 }}>
          Entre com suas credenciais para acessar o sistema
        </CustomText>
      </Box>

      <form onSubmit={handleSubmit}>
        <Box sx={{ animation: `${fadeInUp} 0.5s ease-out`, animationDelay: '0.2s', animationFillMode: 'both' }}>
          <TextField
            fullWidth
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{
              mb: 2.5,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                backgroundColor: '#f8fafc',
                '& fieldset': {
                  borderColor: '#e2e8f0',
                },
                '&:hover fieldset': {
                  borderColor: '#4A90E2',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#4A90E2',
                  borderWidth: 2,
                },
              },
              '& .MuiInputLabel-root': {
                color: '#64748b',
                '&.Mui-focused': {
                  color: '#4A90E2',
                },
              },
            }}
          />
        </Box>

        <Box sx={{ animation: `${fadeInUp} 0.5s ease-out`, animationDelay: '0.3s', animationFillMode: 'both' }}>
          <TextField
            fullWidth
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{
              mb: 1,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                backgroundColor: '#f8fafc',
                '& fieldset': {
                  borderColor: '#e2e8f0',
                },
                '&:hover fieldset': {
                  borderColor: '#4A90E2',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#4A90E2',
                  borderWidth: 2,
                },
              },
              '& .MuiInputLabel-root': {
                color: '#64748b',
                '&.Mui-focused': {
                  color: '#4A90E2',
                },
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mb: 3,
            animation: `${fadeInUp} 0.5s ease-out`,
            animationDelay: '0.4s',
            animationFillMode: 'both',
          }}
        >
          <MuiLink
            href={ROUTES.FORGOT_PASSWORD}
            onClick={(e) => {
              e.preventDefault();
              navigate(ROUTES.FORGOT_PASSWORD);
            }}
            sx={{
              fontSize: '0.875rem',
              color: '#4A90E2',
              textDecoration: 'none',
              fontWeight: 500,
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Esqueceu a senha?
          </MuiLink>
        </Box>

        <Box sx={{ animation: `${fadeInUp} 0.5s ease-out`, animationDelay: '0.5s', animationFillMode: 'both' }}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={isLoading}
            sx={{
              py: 1.5,
              mb: 2.5,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: 2,
              background: 'linear-gradient(135deg, #4A90E2 0%, #3B7AC7 100%)',
              boxShadow: '0 4px 15px rgba(74, 144, 226, 0.3)',
              '&:hover': {
                background: 'linear-gradient(135deg, #5BA0F2 0%, #4A90E2 100%)',
                boxShadow: '0 6px 20px rgba(74, 144, 226, 0.4)',
              },
              '&:disabled': {
                background: '#cbd5e1',
              },
            }}
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </Button>
        </Box>
      </form>

      <Box sx={{ animation: `${fadeInUp} 0.5s ease-out`, animationDelay: '0.6s', animationFillMode: 'both' }}>
        <Divider sx={{ my: 3, '&::before, &::after': { borderColor: '#e2e8f0' } }}>
          <CustomText size="0.875rem" color="#94a3b8">
            ou
          </CustomText>
        </Divider>
      </Box>

      <Box sx={{ animation: `${fadeInUp} 0.5s ease-out`, animationDelay: '0.7s', animationFillMode: 'both' }}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{
            py: 1.5,
            fontSize: '1rem',
            fontWeight: 500,
            textTransform: 'none',
            borderRadius: 2,
            borderColor: '#e2e8f0',
            color: '#475569',
            '&:hover': {
              borderColor: '#cbd5e1',
              backgroundColor: '#f8fafc',
            },
          }}
        >
          Continuar com Google
        </Button>
      </Box>

      <Box
        sx={{
          textAlign: 'center',
          mt: 4,
          animation: `${fadeInUp} 0.5s ease-out`,
          animationDelay: '0.8s',
          animationFillMode: 'both',
        }}
      >
        <CustomText size="0.938rem" color="#64748b">
          Não tem uma conta?{' '}
          <MuiLink
            href={ROUTES.ACCEPT_INVITE}
            onClick={(e) => {
              e.preventDefault();
              navigate(ROUTES.ACCEPT_INVITE);
            }}
            sx={{
              color: '#4A90E2',
              textDecoration: 'none',
              fontWeight: 600,
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Solicitar acesso
          </MuiLink>
        </CustomText>
      </Box>
    </Box>
  );
}
