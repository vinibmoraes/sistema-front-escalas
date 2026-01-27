import { useRef, useEffect } from 'react';
import { Box, keyframes } from '@mui/material';
import logoIgreja from '@/assets/logo-branco-igrejadasnacoes.png';
import terraVideo from '@/assets/terraGirandomp4.mp4';

const floatLogo = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1);
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 30px rgba(100, 149, 237, 0.4));
  }
  50% {
    transform: translateY(-8px) scale(1.03);
    filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.7)) drop-shadow(0 0 40px rgba(100, 149, 237, 0.6));
  }
`;

const atmosphereGlow = keyframes`
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.05);
  }
`;

export default function LoginLogo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.2;
    }
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Atmosfera externa - glow suave */}
      <Box
        sx={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `
            radial-gradient(circle,
              rgba(100, 149, 237, 0.2) 0%,
              rgba(100, 149, 237, 0.1) 30%,
              rgba(138, 43, 226, 0.05) 50%,
              transparent 70%
            )
          `,
          animation: `${atmosphereGlow} 5s ease-in-out infinite`,
        }}
      />

      {/* Container do planeta */}
      <Box
        sx={{
          position: 'relative',
          width: 320,
          height: 320,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          boxShadow: `
            0 0 50px 15px rgba(100, 149, 237, 0.3),
            0 0 100px 30px rgba(70, 130, 180, 0.15),
            inset -30px -30px 60px rgba(0, 0, 0, 0.6),
            inset 15px 15px 40px rgba(255, 255, 255, 0.03)
          `,
        }}
      >
        {/* VIDEO */}
        <Box
          component="video"
          ref={videoRef}
          src={terraVideo}
          autoPlay
          loop
          muted
          playsInline
          sx={{
            position: 'absolute',
            width: '140%',
            height: '140%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />

        {/* Overlay para profundidade 3D */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: `
              linear-gradient(
                135deg,
                rgba(255,255,255,0.12) 0%,
                transparent 35%,
                transparent 65%,
                rgba(0,0,0,0.5) 100%
              )
            `,
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        {/* Brilho na borda (simulando luz do sol) */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: `
              radial-gradient(
                ellipse 50% 50% at 20% 20%,
                rgba(255, 255, 255, 0.15) 0%,
                transparent 50%
              )
            `,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        {/* LOGO */}
        <Box
          component="img"
          src={logoIgreja}
          alt="Logo Igreja das Nações"
          sx={{
            width: 140,
            height: 'auto',
            zIndex: 3,
            animation: `${floatLogo} 4s ease-in-out infinite`,
          }}
        />
      </Box>
    </Box>
  );
}
