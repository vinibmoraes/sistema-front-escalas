import { Box, Card, CardContent, useMediaQuery, useTheme } from '@mui/material';
import { ElementType } from 'react';
import CustomText from '@/components/CustomText';

interface StatCardProps {
  icon: ElementType;
  label: string;
  value: number;
  color: string;
}

export default function StatCard({ icon: Icon, label, value, color }: StatCardProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent
        sx={{
          p: { xs: 1.5, sm: 2 },
          '&:last-child': { pb: { xs: 1.5, sm: 2 } },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'center' },
            gap: { xs: 1, sm: 2 },
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Box
            sx={{
              width: { xs: 40, sm: 48 },
              height: { xs: 40, sm: 48 },
              borderRadius: 2,
              bgcolor: `${color}20`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: color,
              flexShrink: 0,
              '& svg': {
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
              },
            }}
          >
            <Icon />
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <CustomText
              variant={isMobile ? 'h5' : 'h4'}
              weight={700}
              color="text.primary"
              sx={{ lineHeight: 1.2 }}
            >
              {value}
            </CustomText>
            <CustomText
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: { xs: '0.7rem', sm: '0.875rem' },
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {label}
            </CustomText>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
