import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Box } from '@mui/material';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useTranslation } from 'react-i18next';
import CustomText from '@/components/CustomText';
import logoIgreja from '@/assets/logo-branco-igrejadasnacoes.png';

interface LoginTransitionProps {
  onAnimationEnd: () => void;
}

export default function LoginTransition({ onAnimationEnd }: LoginTransitionProps) {
  const { t } = useTranslation();
  const [centered, setCentered] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Inicia movimento imediatamente
    const moveTimer = setTimeout(() => setCentered(true), 50);

    // Mostra mensagem (após o planeta chegar ao centro)
    const welcomeTimer = setTimeout(() => setShowWelcome(true), 1100);

    // Fade out
    const fadeTimer = setTimeout(() => setFadeOut(true), 2400);

    // Navega
    const navTimer = setTimeout(() => onAnimationEnd(), 3000);

    return () => {
      clearTimeout(moveTimer);
      clearTimeout(welcomeTimer);
      clearTimeout(fadeTimer);
      clearTimeout(navTimer);
    };
  }, [onAnimationEnd]);

  const content = (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        background: 'linear-gradient(180deg, #070d15 0%, #0f1a2a 50%, #162540 100%)',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.6s ease-out',
      }}
    >
      {/* Planeta */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: centered
            ? 'translate(-50%, -50%) scale(2)'
            : 'translate(-100%, -50%) scale(1)',
          transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: 'transform',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: { xs: 300, md: 380 },
            height: { xs: 300, md: 380 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              '& > div': {
                width: '100% !important',
                height: '100% !important',
              },
            }}
          >
            <DotLottieReact
              src="https://lottie.host/ef86cbff-91d3-46ad-a179-d0a094ee088c/nQ7HROzhBA.lottie"
              loop
              autoplay
              speed={0.6}
            />
          </Box>

          <Box
            component="img"
            src={logoIgreja}
            alt={t('loginHero.logoAlt')}
            sx={{
              width: { xs: 60, md: 80 },
              height: 'auto',
              zIndex: 2,
              filter: 'drop-shadow(0 3px 10px rgba(0, 0, 0, 0.6))',
            }}
          />
        </Box>
      </Box>

      {/* Mensagem */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          opacity: showWelcome ? 1 : 0,
          transition: 'opacity 0.4s ease-out',
        }}
      >
        <CustomText variant="h4" weight={700} color="rgba(255, 255, 255, 0.95)" sx={{ mb: 1 }}>
          {t('welcome')}
        </CustomText>
        <CustomText size="1rem" color="rgba(255, 255, 255, 0.6)">
          {t('loginHero.preparingEnvironment')}
        </CustomText>
      </Box>
    </Box>
  );

  return createPortal(content, document.body);
}
