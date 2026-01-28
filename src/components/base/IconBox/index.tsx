import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import { ElementType, ReactNode } from 'react';

export type IconBoxSize = 'small' | 'medium' | 'large';
export type IconBoxVariant = 'filled' | 'outlined' | 'soft';

interface IconBoxProps {
  icon: ElementType | ReactNode;
  color: string;
  size?: IconBoxSize;
  variant?: IconBoxVariant;
  rounded?: boolean;
  sx?: SxProps<Theme>;
}

const sizeConfig: Record<IconBoxSize, { box: number; icon: string }> = {
  small: { box: 40, icon: '1.25rem' },
  medium: { box: 48, icon: '1.5rem' },
  large: { box: 64, icon: '2rem' },
};

export default function IconBox({
  icon,
  color,
  size = 'medium',
  variant = 'soft',
  rounded = true,
  sx,
}: IconBoxProps) {
  const config = sizeConfig[size];
  const Icon = icon as ElementType;
  const isComponent = typeof icon === 'function';

  const variantStyles = {
    filled: {
      bgcolor: color,
      color: 'white',
    },
    outlined: {
      border: `2px solid ${color}`,
      color: color,
      bgcolor: 'transparent',
    },
    soft: {
      bgcolor: `${color}20`,
      color: color,
    },
  };

  return (
    <Box
      sx={{
        width: config.box,
        height: config.box,
        borderRadius: rounded ? 2 : 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: config.icon,
        flexShrink: 0,
        ...variantStyles[variant],
        ...sx,
      }}
    >
      {isComponent ? <Icon sx={{ fontSize: config.icon }} /> : icon}
    </Box>
  );
}
