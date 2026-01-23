import { Typography } from '@mui/material';
import { ReactNode, ComponentProps } from 'react';

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline';

export type TextWeight = 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'light' | 'regular' | 'medium' | 'semibold' | 'bold';

export interface CustomTextProps extends Omit<ComponentProps<typeof Typography>, 'variant'> {
  children: ReactNode;
  variant?: TextVariant;
  weight?: TextWeight;
  size?: string | number;
  color?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  lineHeight?: string | number;
  letterSpacing?: string | number;
}

const weightMap: Record<string, number> = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export default function CustomText({
  children,
  variant = 'body1',
  weight,
  size,
  color,
  align,
  lineHeight,
  letterSpacing,
  sx,
  ...rest
}: CustomTextProps) {
  const fontWeight = weight
    ? typeof weight === 'string'
      ? weightMap[weight]
      : weight
    : undefined;

  return (
    <Typography
      variant={variant}
      sx={{
        ...(fontWeight && { fontWeight }),
        ...(size && { fontSize: size }),
        ...(color && { color }),
        ...(align && { textAlign: align }),
        ...(lineHeight && { lineHeight }),
        ...(letterSpacing && { letterSpacing }),
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Typography>
  );
}
