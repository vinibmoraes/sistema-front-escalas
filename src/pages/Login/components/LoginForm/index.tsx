import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Divider,
  Link as MuiLink,
  keyframes,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Google as GoogleIcon, Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomText from '@/components/CustomText';
import { useAuth } from '@/hooks';
import { ROUTES } from '@/constants/routes';
import { loginSchema, type LoginFormData } from '../../Validations';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
`;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    await login(data.email, data.password);
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
          {t('login.title')}
        </CustomText>
      </Box>

      <Box sx={{ animation: `${slideInRight} 0.5s ease-out`, animationDelay: '0.1s', animationFillMode: 'both' }}>
        <CustomText color="#64748b" size="1rem" sx={{ mb: 4 }}>
          {t('login.subtitle')}
        </CustomText>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ animation: `${fadeInUp} 0.5s ease-out`, animationDelay: '0.2s', animationFillMode: 'both' }}>
          <TextField
            fullWidth
            label={t('login.email')}
            type="text"
            autoComplete="email"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message ? t(errors.email.message) : ''}
            sx={{
              mb: 2.5,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                backgroundColor: '#f8fafc',
                '& input': {
                  color: '#1a2a4a',
                },
                '& fieldset': {
                  borderColor: errors.email ? '#ef4444' : '#e2e8f0',
                },
                '&:hover fieldset': {
                  borderColor: errors.email ? '#ef4444' : '#4A90E2',
                },
                '&.Mui-focused fieldset': {
                  borderColor: errors.email ? '#ef4444' : '#4A90E2',
                  borderWidth: 2,
                },
              },
              '& .MuiInputLabel-root': {
                color: errors.email ? '#ef4444' : '#64748b',
                '&.Mui-focused': {
                  color: errors.email ? '#ef4444' : '#4A90E2',
                },
              },
            }}
          />
        </Box>

        <Box sx={{ animation: `${fadeInUp} 0.5s ease-out`, animationDelay: '0.3s', animationFillMode: 'both' }}>
          <TextField
            fullWidth
            label={t('login.password')}
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message ? t(errors.password.message) : ''}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    sx={{ color: '#64748b' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              mb: 1,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                backgroundColor: '#f8fafc',
                '& input': {
                  color: '#1a2a4a',
                },
                '& fieldset': {
                  borderColor: errors.password ? '#ef4444' : '#e2e8f0',
                },
                '&:hover fieldset': {
                  borderColor: errors.password ? '#ef4444' : '#4A90E2',
                },
                '&.Mui-focused fieldset': {
                  borderColor: errors.password ? '#ef4444' : '#4A90E2',
                  borderWidth: 2,
                },
              },
              '& .MuiInputLabel-root': {
                color: errors.password ? '#ef4444' : '#64748b',
                '&.Mui-focused': {
                  color: errors.password ? '#ef4444' : '#4A90E2',
                },
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
            animation: `${fadeInUp} 0.5s ease-out`,
            animationDelay: '0.4s',
            animationFillMode: 'both',
          }}
        >
          <Controller
            name="rememberMe"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    {...field}
                    checked={field.value}
                    sx={{
                      color: '#cbd5e1',
                      '&.Mui-checked': {
                        color: '#4A90E2',
                      },
                    }}
                  />
                }
                label={
                  <CustomText size="0.875rem" color="#64748b">
                    {t('login.rememberMe')}
                  </CustomText>
                }
              />
            )}
          />
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
            {t('login.forgotPassword')}
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
            {isLoading ? t('login.submitting') : t('login.submit')}
          </Button>
        </Box>
      </form>

      <Box sx={{ animation: `${fadeInUp} 0.5s ease-out`, animationDelay: '0.6s', animationFillMode: 'both' }}>
        <Divider sx={{ my: 3, '&::before, &::after': { borderColor: '#e2e8f0' } }}>
          <CustomText size="0.875rem" color="#94a3b8">
            {t('login.or')}
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
          {t('login.continueWithGoogle')}
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
          {t('login.noAccount')}{' '}
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
            {t('login.requestAccess')}
          </MuiLink>
        </CustomText>
      </Box>
    </Box>
  );
}
