import { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, Typography, Divider, Link as MuiLink } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

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
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f0fdfa 0%, #e0f2fe 50%, #f0f9ff 100%)',
        p: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 440,
          width: '100%',
          boxShadow: '0 20px 40px -10px rgba(26, 145, 133, 0.15)',
          borderRadius: 4,
        }}
      >
        <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: 3,
                background: 'linear-gradient(135deg, #1a9185 0%, #147a70 100%)',
                boxShadow: '0 8px 20px -4px rgba(26, 145, 133, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 700,
                fontSize: '2rem',
              }}
            >
              M
            </Box>
          </Box>

          {/* Title */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              textAlign: 'center',
              color: '#1e293b',
              mb: 1,
            }}
          >
            Bem-vindo de volta
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: '#64748b',
              mb: 4,
              fontSize: '0.938rem',
            }}
          >
            Entre com suas credenciais para acessar
          </Typography>

          {/* Form */}
          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{ mb: 2 }}
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
                  color: '#1a9185',
                  textDecoration: 'none',
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
                py: 1.5,
                mb: 2,
                background: 'linear-gradient(135deg, #1a9185 0%, #147a70 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #147a70 0%, #0f5d56 100%)',
                },
              }}
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>

          <Divider sx={{ my: 3 }}>
            <Typography sx={{ color: '#64748b', fontSize: '0.875rem' }}>ou</Typography>
          </Divider>

          {/* Google Login */}
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{
              py: 1.5,
              borderColor: '#e2e8f0',
              color: '#1e293b',
              '&:hover': {
                borderColor: '#cbd5e1',
                backgroundColor: '#f8fafc',
              },
            }}
          >
            Continuar com Google
          </Button>

          {/* Footer */}
          <Typography sx={{ textAlign: 'center', mt: 3, fontSize: '0.875rem', color: '#64748b' }}>
            Não tem uma conta?{' '}
            <MuiLink
              href="/aceitar-convite"
              onClick={(e) => {
                e.preventDefault();
                navigate('/aceitar-convite');
              }}
              sx={{
                color: '#1a9185',
                textDecoration: 'none',
                fontWeight: 600,
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Solicitar acesso
            </MuiLink>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}