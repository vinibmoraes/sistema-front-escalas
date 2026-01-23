import { Box, Chip, useMediaQuery, useTheme } from '@mui/material';
import CustomText from '@/components/CustomText';

interface EventCardProps {
  title: string;
  ministry: string;
  date: string;
  time: string;
  color: string;
}

export default function EventCard({ title, ministry, date, time, color }: EventCardProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
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
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', sm: 'flex-start' },
          gap: { xs: 0.5, sm: 1 },
          mb: { xs: 0.5, sm: 1 },
        }}
      >
        <CustomText
          weight={600}
          color="text.primary"
          sx={{
            fontSize: { xs: '0.85rem', sm: '0.938rem' },
            order: { xs: 1, sm: 0 },
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: { xs: '100%', sm: 'calc(100% - 100px)' },
          }}
        >
          {title}
        </CustomText>
        <Chip
          label={ministry}
          size="small"
          sx={{
            bgcolor: `${color}20`,
            color: color,
            fontWeight: 500,
            fontSize: { xs: '0.65rem', sm: '0.75rem' },
            height: { xs: '20px', sm: '24px' },
            order: { xs: 0, sm: 1 },
            flexShrink: 0,
            '& .MuiChip-label': {
              px: { xs: 1, sm: 1.5 },
            },
          }}
        />
      </Box>
      <CustomText
        variant="body2"
        color="text.secondary"
        sx={{ fontSize: { xs: '0.75rem', sm: '0.813rem' } }}
      >
        {new Date(date).toLocaleDateString('pt-BR')} às {time}
      </CustomText>
    </Box>
  );
}
