import type { ReactNode, FormEvent } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
  IconButton,
  useTheme as useMuiTheme,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export interface BaseDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (() => void) | ((e: FormEvent) => void);
  title: string;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
  cancelText?: string;
  submitText?: string;
  loading?: boolean;
  showSubmit?: boolean;
  showCancel?: boolean;
  showCloseButton?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  submitDisabled?: boolean;
  submitVariant?: 'text' | 'outlined' | 'contained';
  cancelVariant?: 'text' | 'outlined' | 'contained';
  asForm?: boolean;
}

export default function BaseDialog({
  open,
  onClose,
  onSubmit,
  title,
  description,
  icon,
  children,
  cancelText,
  submitText,
  loading = false,
  showSubmit = true,
  showCancel = true,
  showCloseButton = false,
  maxWidth = 'sm',
  submitDisabled = false,
  submitVariant = 'contained',
  cancelVariant = 'text',
  asForm = false,
}: BaseDialogProps) {
  const { t } = useTranslation();
  const theme = useMuiTheme();
  const isDark = theme.palette.mode === 'dark';

  const dialogContent = (
    <>
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          pb: 3,
          color: isDark ? '#f1f5f9' : '#1e293b',
        }}
      >
        {icon && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#4A90E2',
            }}
          >
            {icon}
          </Box>
        )}
        <Box sx={{ flex: 1, fontWeight: 600 }}>{title}</Box>
        {showCloseButton && (
          <IconButton
            aria-label="close"
            onClick={onClose}
            size="small"
            sx={{
              color: isDark ? '#e2e8f0' : '#64748b',
              '&:hover': {
                backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.04)',
              },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        )}
      </DialogTitle>

      <DialogContent>
        {description && (
          <DialogContentText
            sx={{
              mb: children ? 2.5 : 0,
              color: isDark ? '#e2e8f0' : '#64748b',
            }}
          >
            {description}
          </DialogContentText>
        )}
        {children}
      </DialogContent>

      {(showCancel || showSubmit) && (
        <DialogActions sx={{ px: 3, pb: 2.5, pt: 1 }}>
          {showCancel && (
            <Button
              onClick={onClose}
              disabled={loading}
              variant={cancelVariant}
              sx={{
                color: isDark ? '#e2e8f0' : '#64748b',
                '&:hover': {
                  backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
                },
              }}
            >
              {cancelText || t('actions.cancel')}
            </Button>
          )}
          {showSubmit && (
            <Button
              type={asForm ? 'submit' : 'button'}
              onClick={asForm ? undefined : (onSubmit as () => void)}
              variant={submitVariant}
              disabled={loading || submitDisabled}
              sx={{
                minWidth: 100,
                ...(submitVariant === 'contained' && {
                  background: 'linear-gradient(135deg, #4A90E2 0%, #3B7AC7 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #5BA0F2 0%, #4A90E2 100%)',
                  },
                  '&:disabled': {
                    background: isDark ? '#475569' : '#cbd5e1',
                    color: isDark ? '#94a3b8' : '#94a3b8',
                  },
                }),
              }}
            >
              {submitText || t('actions.save')}
            </Button>
          )}
        </DialogActions>
      )}
    </>
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth
      PaperProps={{
        component: asForm ? 'form' : 'div',
        onSubmit: asForm ? onSubmit : undefined,
        sx: {
          borderRadius: 3,
          backgroundColor: isDark ? '#1e293b' : '#ffffff',
          backgroundImage: 'none',
        },
      }}
    >
      {dialogContent}
    </Dialog>
  );
}
