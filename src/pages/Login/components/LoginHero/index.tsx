import { Box, keyframes } from '@mui/material';
import { Church as ChurchIcon } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import CustomText from '@/components/CustomText';

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(3deg); }
`;

const floatReverse = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(20px) rotate(-3deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
  50% { transform: scale(1.05); box-shadow: 0 0 40px 10px rgba(255, 255, 255, 0.2); }
`;

const glow = keyframes`
  0%, 100% { opacity: 0.6; filter: drop-shadow(0 0 10px rgba(255,255,255,0.3)); }
  50% { opacity: 1; filter: drop-shadow(0 0 25px rgba(255,255,255,0.6)); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 0; transform: scale(0); }
  50% { opacity: 1; transform: scale(1); }
`;

const orbitSlow = keyframes`
  from { transform: rotate(0deg) translateX(150px) rotate(0deg); }
  to { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
`;

const orbitFast = keyframes`
  from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
  to { transform: rotate(-360deg) translateX(100px) rotate(360deg); }
`;

function Particle({ delay, duration, size, top, left }: { delay: number; duration: number; size: number; top: string; left: string }) {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.8)',
        top,
        left,
        animation: `${sparkle} ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

export default function LoginHero() {
  const { t } = useTranslation();

  const particles = [
    { delay: 0, duration: 3, size: 4, top: '20%', left: '15%' },
    { delay: 0.5, duration: 4, size: 3, top: '30%', left: '80%' },
    { delay: 1, duration: 3.5, size: 5, top: '60%', left: '20%' },
    { delay: 1.5, duration: 4.5, size: 3, top: '75%', left: '75%' },
    { delay: 2, duration: 3, size: 4, top: '45%', left: '90%' },
    { delay: 0.3, duration: 5, size: 2, top: '15%', left: '60%' },
    { delay: 1.2, duration: 4, size: 3, top: '85%', left: '40%' },
    { delay: 2.5, duration: 3.5, size: 4, top: '10%', left: '35%' },
  ];

  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'flex' },
        flex: 1,
        background: 'linear-gradient(-45deg, #4A90E2, #3066B0, #3B7AC7, #5BA0F2, #2D5AA0)',
        backgroundSize: '400% 400%',
        animation: `${gradientShift} 15s ease infinite`,
        position: 'relative',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        p: 6,
      }}
    >
      {particles.map((p, i) => (
        <Particle key={i} {...p} />
      ))}

      <Box
        sx={{
          position: 'absolute',
          width: 450,
          height: 450,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
          top: -120,
          left: -120,
          backdropFilter: 'blur(60px)',
          animation: `${float} 8s ease-in-out infinite`,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          width: 350,
          height: 350,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)',
          bottom: -80,
          right: -80,
          backdropFilter: 'blur(60px)',
          animation: `${floatReverse} 10s ease-in-out infinite`,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.05)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.6)',
            top: '50%',
            left: '50%',
            animation: `${orbitSlow} 20s linear infinite`,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.4)',
            top: '50%',
            left: '50%',
            animation: `${orbitFast} 15s linear infinite`,
          }}
        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          width: 180,
          height: 180,
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          top: '20%',
          right: '15%',
          animation: `${float} 12s ease-in-out infinite`,
          animationDelay: '2s',
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 500 }}>
        <Box
          sx={{
            width: 120,
            height: 120,
            borderRadius: 4,
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 4,
            border: '2px solid rgba(255, 255, 255, 0.3)',
            animation: `${pulse} 3s ease-in-out infinite`,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: -3,
              borderRadius: 5,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.4), transparent, rgba(255,255,255,0.4))',
              backgroundSize: '200% 200%',
              animation: `${gradientShift} 3s ease infinite`,
              zIndex: -1,
            },
          }}
        >
          <ChurchIcon
            sx={{
              fontSize: 70,
              color: 'white',
              animation: `${glow} 2s ease-in-out infinite`,
            }}
          />
        </Box>

        <Box sx={{ animation: `${fadeInUp} 0.8s ease-out`, animationDelay: '0.2s', animationFillMode: 'both' }}>
          <CustomText variant="h3" weight={700} color="white" sx={{ mb: 2, textShadow: '0 2px 20px rgba(0,0,0,0.2)' }}>
            {t('appName')} {t('appSubtitle')}
          </CustomText>
        </Box>

        <Box sx={{ animation: `${fadeInUp} 0.8s ease-out`, animationDelay: '0.4s', animationFillMode: 'both' }}>
          <CustomText size="1.125rem" color="rgba(255, 255, 255, 0.9)" sx={{ textShadow: '0 1px 10px rgba(0,0,0,0.1)' }}>
            Gerencie escalas, voluntários e ministérios de forma simples e eficiente
          </CustomText>
        </Box>
      </Box>
    </Box>
  );
}
