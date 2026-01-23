import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
  Alert,
  Box
} from '@mui/material';
import * as yup from 'yup';

interface ForgotPasswordDialogProps {
  open: boolean;
  onClose: () => void;
}

const emailSchema = yup.object({
  email: yup.string().email('Email inválido').required('Email é obrigatório')
});

function ForgotPasswordDialog({ open, onClose }: ForgotPasswordDialogProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailSchema.validate({ email });
      
      // Aqui você faria a chamada para a API
      // await authService.forgotPassword(email);
      
      // Simular sucesso
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
      
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (err: any) {
      if (err.name === 'ValidationError') {
        setError(err.message);
      } else {
        setError('Erro ao enviar email de recuperação');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setEmail('');
    setError('');
    setSuccess(false);
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Recuperar senha</DialogTitle>
      
      <Box component="form" onSubmit={handleSubmit}>
        <DialogContent>
          {success ? (
            <Alert severity="success">
              Email de recuperação enviado com sucesso! Verifique sua caixa de entrada.
            </Alert>
          ) : (
            <>
              <DialogContentText mb={2}>
                Digite seu email e enviaremos um link para você redefinir sua senha.
              </DialogContentText>

              {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error}
                </Alert>
              )}

              <TextField
                autoFocus
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </>
          )}
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={handleClose} disabled={loading}>
            Cancelar
          </Button>
          {!success && (
            <Button type="submit" variant="contained" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar'}
            </Button>
          )}
        </DialogActions>
      </Box>
    </Dialog>
  );
}

export default ForgotPasswordDialog;