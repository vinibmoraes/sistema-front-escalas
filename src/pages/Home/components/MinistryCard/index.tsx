import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CustomText from '@/components/CustomText';

interface MinistryCardProps {
  name: string;
  volunteersCount: number;
  color: string;
}

export default function MinistryCard({ name, volunteersCount, color }: MinistryCardProps) {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: { xs: 1.5, sm: 2 },
        p: { xs: 1.5, sm: 2 },
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        transition: 'all 0.2s ease',
        '&:hover': {
          bgcolor: 'action.hover',
          borderColor: 'divider',
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <Box
        sx={{
          width: { xs: 10, sm: 12 },
          height: { xs: 10, sm: 12 },
          borderRadius: '50%',
          bgcolor: color,
          flexShrink: 0,
        }}
      />
      <Box sx={{ flexGrow: 1, minWidth: 0 }}>
        <CustomText
          weight={600}
          color="text.primary"
          sx={{
            fontSize: { xs: '0.85rem', sm: '0.938rem' },
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {name}
        </CustomText>
        <CustomText
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: { xs: '0.75rem', sm: '0.813rem' } }}
        >
          {t('stats.volunteer_count', { count: volunteersCount })}
        </CustomText>
      </Box>
    </Box>
  );
}
