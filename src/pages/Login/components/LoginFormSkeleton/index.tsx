import { Box } from '@mui/material';
import { Skeleton } from '@/components/base';

export default function LoginFormSkeleton() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 420,
        p: { xs: 3, sm: 4 },
      }}
    >
      {/* Título */}
      <Skeleton variant="text" width="70%" height={40} sx={{ mb: 1 }} />

      {/* Subtítulo */}
      <Skeleton variant="text" width="90%" height={24} sx={{ mb: 4 }} />

      {/* Campo de e-mail */}
      <Skeleton variant="rounded" height={56} sx={{ mb: 2.5, borderRadius: 2 }} />

      {/* Campo de senha */}
      <Skeleton variant="rounded" height={56} sx={{ mb: 1, borderRadius: 2 }} />

      {/* Checkbox e link */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Skeleton variant="rounded" width={24} height={24} />
          <Skeleton variant="text" width={140} height={20} />
        </Box>
        <Skeleton variant="text" width={120} height={20} />
      </Box>

      {/* Botão Entrar */}
      <Skeleton variant="rounded" height={52} sx={{ mb: 2.5, borderRadius: 2 }} />

      {/* Divider "ou" */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 3 }}>
        <Skeleton variant="text" sx={{ flex: 1 }} height={1} />
        <Skeleton variant="text" width={30} height={20} />
        <Skeleton variant="text" sx={{ flex: 1 }} height={1} />
      </Box>

      {/* Botão Google */}
      <Skeleton variant="rounded" height={52} sx={{ borderRadius: 2 }} />

      {/* Link de cadastro */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 4 }}>
        <Skeleton variant="text" width={140} height={20} />
        <Skeleton variant="text" width={100} height={20} />
      </Box>
    </Box>
  );
}
