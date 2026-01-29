import { useState, useEffect, useMemo } from 'react';
import { Box, keyframes } from '@mui/material';
import { FormatQuote as QuoteIcon } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import CustomText from '@/components/CustomText';
import LoginLogo from './LoginLogo';

const gradientShift = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

const float1 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
`;

const float2 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-40px, 20px) scale(1.15); }
  66% { transform: translate(25px, -25px) scale(0.95); }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.3); }
`;

const aurora = keyframes`
  0%, 100% {
    opacity: 0.4;
    transform: translateX(-20%) skewX(-10deg);
  }
  50% {
    opacity: 0.7;
    transform: translateX(20%) skewX(10deg);
  }
`;

const nebulaMove = keyframes`
  0%, 100% {
    transform: translate(0, 0) scale(1);
    filter: hue-rotate(0deg);
  }
  33% {
    transform: translate(30px, -20px) scale(1.05);
    filter: hue-rotate(20deg);
  }
  66% {
    transform: translate(-20px, 30px) scale(0.95);
    filter: hue-rotate(-20deg);
  }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

interface Verse {
  text: string;
  reference: string;
}

export default function LoginHero() {
  const { t } = useTranslation();
  const verses = t('loginHero.verses', { returnObjects: true }) as Verse[];
  const bibleVersion = t('loginHero.bibleVersion');
  const [verseIndex, setVerseIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Delay para o efeito de aparecimento
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setVerseIndex((prev) => (prev + 1) % verses.length);
        setIsVisible(true);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, [verses.length]);

  const currentVerse = verses[verseIndex];

  // Gerar estrelas (useMemo para manter posições fixas entre re-renderizações)
  const stars = useMemo(() => Array.from({ length: 50 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    delay: `${Math.random() * 4}s`,
    duration: `${Math.random() * 2 + 2}s`,
  })), []);

  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #070d15 0%, #0f1a2a 50%, #162540 100%)',
        backgroundSize: '400% 400%',
        animation: `${gradientShift} 25s ease infinite`,
        overflow: 'hidden',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'scale(1)' : 'scale(1.15)',
        transition: 'opacity 1s ease-out, transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      {/* Aurora no topo */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '-30%',
          width: '160%',
          height: '50%',
          background: 'linear-gradient(180deg, rgba(100, 149, 237, 0.15) 0%, rgba(138, 43, 226, 0.1) 40%, transparent 100%)',
          filter: 'blur(80px)',
          animation: `${aurora} 20s ease-in-out infinite`,
        }}
      />

      {/* Nebulosas */}
      <Box
        sx={{
          position: 'absolute',
          width: '60%',
          height: '60%',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(138, 43, 226, 0.12) 0%, transparent 60%)',
          top: '-20%',
          left: '-20%',
          animation: `${nebulaMove} 30s ease-in-out infinite`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '50%',
          height: '50%',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.1) 0%, transparent 60%)',
          bottom: '-15%',
          right: '-15%',
          animation: `${nebulaMove} 35s ease-in-out infinite reverse`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '40%',
          height: '40%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.06) 0%, transparent 60%)',
          top: '50%',
          right: '10%',
          animation: `${float1} 25s ease-in-out infinite`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '35%',
          height: '35%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(100, 149, 237, 0.08) 0%, transparent 60%)',
          bottom: '20%',
          left: '5%',
          animation: `${float2} 28s ease-in-out infinite`,
        }}
      />

      {/* Estrelas */}
      {stars.map((star) => (
        <Box
          key={star.id}
          sx={{
            position: 'absolute',
            width: star.size,
            height: star.size,
            borderRadius: '50%',
            background: 'white',
            top: star.top,
            left: star.left,
            animation: `${twinkle} ${star.duration} ease-in-out infinite`,
            animationDelay: star.delay,
            boxShadow: `0 0 ${star.size * 2}px ${star.size}px rgba(255, 255, 255, 0.4)`,
          }}
        />
      ))}

      {/* Conteúdo principal - centralizado */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 1,
        }}
      >
        <Box sx={{ animation: `${fadeInUp} 0.8s ease-out` }}>
          <LoginLogo />
        </Box>
      </Box>

      {/* Versículo */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 32,
          left: 32,
          maxWidth: 400,
          zIndex: 2,
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 1.5,
            p: 2,
            borderRadius: 2,
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 0.5s ease-in-out',
          }}
        >
          <QuoteIcon
            sx={{
              fontSize: 20,
              color: 'rgba(255, 255, 255, 0.4)',
              transform: 'scaleX(-1)',
              flexShrink: 0,
              mt: 0.3,
            }}
          />
          <Box>
            <CustomText
              size="0.875rem"
              color="rgba(255, 255, 255, 0.8)"
              sx={{ fontStyle: 'italic', lineHeight: 1.5, mb: 0.5 }}
            >
              "{currentVerse.text}"
            </CustomText>
            <CustomText
              size="0.75rem"
              weight={600}
              color="rgba(255, 255, 255, 0.4)"
            >
              — {currentVerse.reference} ({bibleVersion})
            </CustomText>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
