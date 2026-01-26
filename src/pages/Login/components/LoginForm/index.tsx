import { useState } from 'react';
import { Box, TextField, Button, Divider, Link as MuiLink, keyframes } from '@mui/material';
import { Google as GoogleIcon, Church as ChurchIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import CustomText from '@/components/CustomText';
import { useAuth } from '@/hooks';
import { ROUTES } from '@/constants/routes';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
`;

const bounce = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 4px 12px -2px rgba(74, 144, 226, 0.3); }
  50% { box-shadow: 0 8px 25px -2px rgba(74, 144, 226, 0.5); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
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
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 3, sm: 4 },
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74, 144, 226, 0.03) 0%, transparent 70%)',
          top: -100,
          right: -100,
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74, 144, 226, 0.02) 0%, transparent 70%)',
          bottom: -50,
          left: -50,
          pointerEvents: 'none',
        }}
      />

      <Box
        sx={{
          width: '100%',
          maxWidth: 480,
          animation: `${fadeInUp} 0.6s ease-out`,
        }}
      >
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'center',
            mb: 4,
            animation: `${bounce} 2s ease-in-out infinite`,
          }}
        >
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: 3,
              background: 'linear-gradient(135deg, #4A90E2 0%, #3B7AC7 100%)',
              boxShadow: '0 8px 20px -4px rgba(74, 144, 226, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                inset: -2,
                borderRadius: 4,
                background: 'linear-gradient(135deg, #4A90E2, #3B7AC7, #4A90E2)',
                backgroundSize: '200% 200%',
                animation: `${shimmer} 3s linear infinite`,
                zIndex: -1,
                opacity: 0.5,
              },
            }}
          >
            <ChurchIcon sx={{ fontSize: 36, color: 'white' }} />
          </Box>
        </Box>

        <Box sx={{ animation: `${slideInRight} 0.5s ease-out`, animationDelay: '0.1s', animationFillMode: 'both' }}>
          <CustomText variant="h4" weight={700} color="text.primary" sx={{ mb: 1 }}>
            Bem-vindo de volta
          </CustomText>
        </Box>

        <Box sx={{ animation: `${slideInRight} 0.5s ease-out`, animationDelay: '0.2s', animationFillMode: 'both' }}>
          <CustomText color="text.secondary" size="1rem" sx={{ mb: 5 }}>
            Entre com suas credenciais para acessar o sistema
          </CustomText>
        </Box>

        <form onSubmit={handleSubmit}>
          <Box sx={{ animation: `${fadeInUp} 0.5s ease-out`, animationDelay: '0.3s', animationFillMode: 'both' }}>
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
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(74, 144, 226, 0.1)',
                  },
                  '&.Mui-focused': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 20px rgba(74, 144, 226, 0.15)',
                  },
                },
              }}
            />
          </Box>

          <Box sx={{ animation: `${fadeInUp} 0.5s ease-out`, animationDelay: '0.4s', animationFillMode: 'both' }}>
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
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(74, 144, 226, 0.1)',
                  },
                  '&.Mui-focused': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 20px rgba(74, 144, 226, 0.15)',
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
              animationDelay: '0.5s',
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
                transition: 'all 0.2s ease',
                '&:hover': {
                  textDecoration: 'underline',
                  transform: 'translateX(3px)',
                },
              }}
            >
              Esqueceu a senha?
            </MuiLink>
          </Box>

          <Box sx={{ animation: `${fadeInUp} 0.5s ease-out`, animationDelay: '0.6s', animationFillMode: 'both' }}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              disabled={isLoading}
              sx={{
                py: 1.75,
                mb: 2.5,
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
                background: 'linear-gradient(135deg, #4A90E2 0%, #3B7AC7 100%)',
                backgroundSize: '200% 200%',
                animation: isLoading ? 'none' : `${pulseGlow} 2s ease-in-out infinite`,
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  animation: `${shimmer} 2s infinite`,
                },
                '&:hover': {
                  background: 'linear-gradient(135deg, #3B7AC7 0%, #3066B0 100%)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 10px 30px -5px rgba(74, 144, 226, 0.5)',
                },
                '&:active': {
                  transform: 'translateY(-1px)',
                },
                '&:disabled': {
                  background: 'rgba(74, 144, 226, 0.3)',
                  animation: 'none',
                },
              }}
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </Button>
          </Box>
        </form>

        <Box sx={{ animation: `${fadeInUp} 0.5s ease-out`, animationDelay: '0.7s', animationFillMode: 'both' }}>
          <Divider sx={{ my: 3 }}>
            <CustomText size="0.875rem" color="text.secondary">
              ou
            </CustomText>
          </Divider>
        </Box>

        <Box sx={{ animation: `${fadeInUp} 0.5s ease-out`, animationDelay: '0.8s', animationFillMode: 'both' }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{
              py: 1.75,
              fontSize: '1rem',
              fontWeight: 500,
              textTransform: 'none',
              borderColor: 'divider',
              color: 'text.primary',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: '#4A90E2',
                bgcolor: 'rgba(74, 144, 226, 0.04)',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(74, 144, 226, 0.1)',
                '& .MuiSvgIcon-root': {
                  animation: `${float} 0.5s ease-in-out`,
                },
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
            animationDelay: '0.9s',
            animationFillMode: 'both',
          }}
        >
          <CustomText size="0.938rem" color="text.secondary">
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
                transition: 'all 0.2s ease',
                '&:hover': {
                  textDecoration: 'underline',
                  color: '#3066B0',
                },
              }}
            >
              Solicitar acesso
            </MuiLink>
          </CustomText>
        </Box>
      </Box>
    </Box>
  );
}
