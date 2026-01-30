import { useState } from 'react';
import { TextField, Alert } from '@mui/material';
import { LockReset as LockResetIcon } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { authAPI } from '@/services/api';
import { useToast } from '@/hooks';
import { BaseDialog } from '@/components/base';
import { forgotPasswordSchema, type ForgotPasswordFormData } from '../../Validations';

interface ForgotPasswordDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function ForgotPasswordDialog({ open, onClose }: ForgotPasswordDialogProps) {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
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

    try {
      await authAPI.forgotPassword(data.email);
      setSuccess(true);

      toast({
        title: t('login.forgotPasswordDialog.successTitle'),
        description: t('login.forgotPasswordDialog.success'),
        variant: 'success',
      });

      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch {
      toast({
        title: t('login.forgotPasswordDialog.error'),
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    reset();
    setSuccess(false);
    onClose();
  };

  return (
    <BaseDialog
      open={open}
      onClose={handleClose}
      onSubmit={handleSubmit(onSubmit)}
      title={t('login.forgotPasswordDialog.title')}
      description={success ? undefined : t('login.forgotPasswordDialog.description')}
      icon={<LockResetIcon />}
      cancelText={t('login.forgotPasswordDialog.cancel')}
      submitText={loading ? t('login.forgotPasswordDialog.submitting') : t('login.forgotPasswordDialog.submit')}
      loading={loading}
      showSubmit={!success}
      asForm
    >
      {success ? (
        <Alert severity="success">
          {t('login.forgotPasswordDialog.success')}
        </Alert>
      ) : (
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
      )}
    </BaseDialog>
  );
}
