import { Box, Button, keyframes } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home as HomeIcon, SearchOff as SearchOffIcon } from '@mui/icons-material';
import CustomText from '@/components/CustomText';
import { ROUTES } from '@/constants/routes';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`;

export default function NotFound() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleGoHome = () => {
    const isAuthenticated = localStorage.getItem('auth_token');
    navigate(isAuthenticated ? ROUTES.HOME : ROUTES.LOGIN);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #070d15 0%, #0f1a2a 50%, #162540 100%)',
        px: 3,
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          mb: 4,
          animation: `${float} 3s ease-in-out infinite`,
        }}
      >
        <CustomText
          sx={{
            fontSize: { xs: '120px', sm: '160px', md: '200px' },
            fontWeight: 800,
            background: 'linear-gradient(135deg, #4A90E2 0%, #7C3AED 50%, #EC4899 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 80px rgba(74, 144, 226, 0.3)',
            lineHeight: 1,
          }}
        >
          404
        </CustomText>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: `${pulse} 2s ease-in-out infinite`,
          }}
        >
          <SearchOffIcon
            sx={{
              fontSize: { xs: 60, sm: 80, md: 100 },
              color: 'rgba(255,255,255,0.1)',
            }}
          />
        </Box>
      </Box>

      <CustomText
        variant="h3"
        weight={700}
        color="#f1f5f9"
        sx={{ mb: 1.5 }}
      >
        {t('notFound.title')}
      </CustomText>

      <CustomText
        size="1.1rem"
        color="#94a3b8"
        sx={{ mb: 4, maxWidth: 400 }}
      >
        {t('notFound.description')}
      </CustomText>

      <Button
        variant="contained"
        startIcon={<HomeIcon />}
        onClick={handleGoHome}
        sx={{
          py: 1.5,
          px: 4,
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
        }}
      >
        {t('notFound.backHome')}
      </Button>
    </Box>
  );
}
