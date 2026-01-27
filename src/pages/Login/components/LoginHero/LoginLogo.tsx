import { Box, keyframes } from '@mui/material';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import logoIgreja from '@/assets/logo-branco-igrejadasnacoes.png';

const floatLogo = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-8px) scale(1.03);
  }
`;

const breathe = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

export default function LoginLogo() {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Container do planeta com Lottie */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: 400, sm: 500, md: 580 },
          height: { xs: 400, sm: 500, md: 580 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: `${breathe} 4s ease-in-out infinite`,
          borderRadius: '50%',
          overflow: 'hidden',
          clipPath: 'circle(50% at 50% 50%)',
        }}
      >
        {/* Animação Lottie do Globo */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            filter: 'brightness(1.2)',
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
            speed={0.8}
          />
        </Box>

        {/* LOGO centralizado com sombra */}
        <Box
          component="img"
          src={logoIgreja}
          alt="Logo Igreja das Nações"
          sx={{
            width: { xs: 80, sm: 95, md: 110 },
            height: 'auto',
            zIndex: 3,
            animation: `${floatLogo} 4s ease-in-out infinite`,
            filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.7))',
          }}
        />
      </Box>
    </Box>
  );
}
