import { Chip, ChipProps } from '@mui/material';
import { colors } from '@/themes/colors';

export type StatusType = 'active' | 'inactive' | 'pending' | 'approved' | 'rejected';

interface StatusChipProps extends Omit<ChipProps, 'color'> {
  status: StatusType;
  label?: string;
}

const statusConfig: Record<StatusType, { label: string; bg: string; color: string }> = {
  active: {
    label: 'Ativo',
    bg: colors.alpha.primary(0.1),
    color: colors.primary,
  },
  inactive: {
    label: 'Inativo',
    bg: colors.alpha.black(0.05),
    color: colors.gray[600],
  },
  pending: {
    label: 'Pendente',
    bg: `${colors.warning}20`,
    color: colors.warning,
  },
  approved: {
    label: 'Aprovado',
    bg: `${colors.success}20`,
    color: colors.success,
  },
  rejected: {
    label: 'Rejeitado',
    bg: `${colors.error}20`,
    color: colors.error,
  },
};

export default function StatusChip({ status, label, size = 'small', ...rest }: StatusChipProps) {
  const config = statusConfig[status];

  return (
    <Chip
      label={label || config.label}
      size={size}
      sx={{
        bgcolor: config.bg,
        color: config.color,
        fontWeight: 500,
        fontSize: size === 'small' ? '0.75rem' : '0.875rem',
        height: size === 'small' ? '24px' : '32px',
        ...rest.sx,
      }}
      {...rest}
    />
  );
}
