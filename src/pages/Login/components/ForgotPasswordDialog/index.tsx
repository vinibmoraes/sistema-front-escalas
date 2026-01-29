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
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotPasswordSchema, type ForgotPasswordFormData } from '../../Validations';

interface ForgotPasswordDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function ForgotPasswordDialog({ open, onClose }: ForgotPasswordDialogProps) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setLoading(true);
    setError('');

    try {
      // Aqui você faria a chamada para a API
      // await authService.forgotPassword(data.email);

      // Simular sucesso
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);

      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch {
      setError(t('login.forgotPasswordDialog.error'));
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    reset();
    setError('');
    setSuccess(false);
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>{t('login.forgotPasswordDialog.title')}</DialogTitle>

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          {success ? (
            <Alert severity="success">
              {t('login.forgotPasswordDialog.success')}
            </Alert>
          ) : (
            <>
              <DialogContentText mb={2}>
                {t('login.forgotPasswordDialog.description')}
              </DialogContentText>

              {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error}
                </Alert>
              )}

              <TextField
                autoFocus
                fullWidth
                label={t('login.forgotPasswordDialog.emailLabel')}
                type="email"
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message ? t(errors.email.message) : ''}
                disabled={loading}
              />
            </>
          )}
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={handleClose} disabled={loading}>
            {t('login.forgotPasswordDialog.cancel')}
          </Button>
          {!success && (
            <Button type="submit" variant="contained" disabled={loading}>
              {loading ? t('login.forgotPasswordDialog.submitting') : t('login.forgotPasswordDialog.submit')}
            </Button>
          )}
        </DialogActions>
      </Box>
    </Dialog>
  );
}
