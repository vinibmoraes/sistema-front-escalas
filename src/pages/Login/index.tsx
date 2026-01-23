import { useState } from 'react';
import { Box, TextField, Button, Divider, Link as MuiLink, useTheme } from '@mui/material';
import { Google as GoogleIcon, Church as ChurchIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CustomText from '@/components/CustomText';
import { authAPI } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useTranslation();
  const theme = useTheme();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response: any = await authAPI.login(email, password);
      localStorage.setItem('auth_token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      toast({
        title: 'Login realizado com sucesso!',
        variant: 'success',
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: 'Erro ao fazer login',
        description: 'Verifique suas credenciais e tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        bgcolor: 'background.default',
      }}
    >
      {/* Left Side - Decorative */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flex: 1,
          background: 'linear-gradient(135deg, #4A90E2 0%, #3066B0 50%, #3B7AC7 100%)',
          position: 'relative',
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
          p: 6,
        }}
      >
        {/* Decorative circles */}
        <Box
          sx={{
            position: 'absolute',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            top: -100,
            left: -100,
            backdropFilter: 'blur(60px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.08)',
            bottom: -50,
            right: -50,
            backdropFilter: 'blur(60px)',
          }}
        />

        {/* Content */}
        <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 500 }}>
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: 4,
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 4,
              border: '2px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <ChurchIcon sx={{ fontSize: 60, color: 'white' }} />
          </Box>
          <CustomText variant="h3" weight={700} color="white" sx={{ mb: 2 }}>
            {t('appName')} {t('appSubtitle')}
          </CustomText>
          <CustomText size="1.125rem" color="rgba(255, 255, 255, 0.9)">
            Gerencie escalas, voluntários e ministérios de forma simples e eficiente
          </CustomText>
        </Box>
      </Box>

      {/* Right Side - Login Form */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 3, sm: 4 },
          bgcolor: 'background.default',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 480 }}>
          {/* Logo for mobile */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'center',
              mb: 4,
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
              }}
            >
              <ChurchIcon sx={{ fontSize: 36, color: 'white' }} />
            </Box>
          </Box>

          {/* Title */}
          <CustomText variant="h4" weight={700} color="text.primary" sx={{ mb: 1 }}>
            Bem-vindo de volta
          </CustomText>
          <CustomText color="text.secondary" size="1rem" sx={{ mb: 5 }}>
            Entre com suas credenciais para acessar o sistema
          </CustomText>

          {/* Form */}
          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{ mb: 2.5 }}
            />
            <TextField
              fullWidth
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{ mb: 1 }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
              <MuiLink
                href="/recuperar-senha"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/recuperar-senha');
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

            <Button
              fullWidth
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                py: 1.75,
                mb: 2.5,
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
                background: 'linear-gradient(135deg, #4A90E2 0%, #3B7AC7 100%)',
                boxShadow: '0 4px 12px -2px rgba(74, 144, 226, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #3B7AC7 0%, #3066B0 100%)',
                  boxShadow: '0 6px 16px -2px rgba(74, 144, 226, 0.4)',
                },
                '&:disabled': {
                  background: 'rgba(74, 144, 226, 0.3)',
                },
              }}
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>

          <Divider sx={{ my: 3 }}>
            <CustomText size="0.875rem" color="text.secondary">
              ou
            </CustomText>
          </Divider>

          {/* Google Login */}
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
              '&:hover': {
                borderColor: 'text.secondary',
                bgcolor: 'action.hover',
              },
            }}
          >
            Continuar com Google
          </Button>

          {/* Footer */}
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <CustomText size="0.938rem" color="text.secondary">
              Não tem uma conta?{' '}
              <MuiLink
                href="/aceitar-convite"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/aceitar-convite');
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
      </Box>
    </Box>
  );
}