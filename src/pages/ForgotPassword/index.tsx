import { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, Typography, Link as MuiLink } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authAPI.forgotPassword(email);
      setSent(true);
      toast({
        title: 'E-mail enviado!',
        description: 'Verifique sua caixa de entrada para redefinir sua senha.',
        variant: 'success',
      });
    } catch (error) {
      toast({
        title: 'Erro ao enviar e-mail',
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
      <Card sx={{ maxWidth: 440, width: '100%', boxShadow: '0 20px 40px -10px rgba(26, 145, 133, 0.15)', borderRadius: 4 }}>
        <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
          <Box sx={{ mb: 3 }}>
            <MuiLink
              href="/login"
              onClick={(e) => {
                e.preventDefault();
                navigate('/login');
              }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: '#1a9185',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              <ArrowBackIcon fontSize="small" />
              Voltar para login
            </MuiLink>
          </Box>

          <Typography variant="h4" sx={{ fontWeight: 700, color: '#1e293b', mb: 1 }}>
            Recuperar Senha
          </Typography>
          <Typography sx={{ color: '#64748b', mb: 4 }}>
            {sent
              ? 'Enviamos um e-mail com instruções para redefinir sua senha.'
              : 'Digite seu e-mail para receber instruções de recuperação.'}
          </Typography>

          {!sent && (
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="E-mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{ mb: 3 }}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  py: 1.5,
                  background: 'linear-gradient(135deg, #1a9185 0%, #147a70 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #147a70 0%, #0f5d56 100%)',
                  },
                }}
              >
                {loading ? 'Enviando...' : 'Enviar instruções'}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
