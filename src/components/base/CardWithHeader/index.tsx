import { Card, CardContent, Box, CardProps } from '@mui/material';
import { ReactNode } from 'react';
import CustomText from '@/components/CustomText';

interface CardWithHeaderProps extends CardProps {
  title: string;
  action?: ReactNode;
  children: ReactNode;
  headerSx?: CardProps['sx'];
  contentGap?: number;
}

export default function CardWithHeader({
  title,
  action,
  children,
  headerSx,
  contentGap = 1.5,
  sx,
  ...rest
}: CardWithHeaderProps) {
  return (
    <Card sx={{ height: '100%', ...sx }} {...rest}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
            ...headerSx,
          }}
        >
          <CustomText variant="h6" weight={600}>
            {title}
          </CustomText>
          {action && action}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: contentGap }}>
          {children}
        </Box>
      </CardContent>
    </Card>
  );
}
