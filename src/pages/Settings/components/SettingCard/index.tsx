import { Card, CardContent, Box } from '@mui/material';
import { ReactNode } from 'react';
import CustomText from '@/components/CustomText';

interface SettingCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  action: ReactNode;
}

export default function SettingCard({ icon, title, description, action }: SettingCardProps) {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2,
                bgcolor: 'rgba(74, 144, 226, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#4A90E2',
              }}
            >
              {icon}
            </Box>
            <Box sx={{ flex: 1 }}>
              <CustomText variant="h6" weight={600} sx={{ mb: 0.5 }}>
                {title}
              </CustomText>
              <CustomText variant="body2" color="text.secondary">
                {description}
              </CustomText>
            </Box>
          </Box>
          <Box sx={{ ml: 2 }}>
            {action}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
