import { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, Typography, Link as MuiLink } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

export default function AcceptInvite() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: 'Erro',
        description: 'As senhas não coincidem.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      toast({
        title: 'Solicitação enviada!',
        description: 'Aguarde aprovação do administrador.',
        variant: 'success',
      });
      navigate('/login');
    }, 1000);
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
            Solicitar Acesso
          </Typography>
          <Typography sx={{ color: '#64748b', mb: 4 }}>
            Preencha os dados para solicitar acesso ao sistema.
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Nome completo"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="E-mail"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Senha"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Confirmar senha"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
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
              {loading ? 'Enviando...' : 'Solicitar Acesso'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
