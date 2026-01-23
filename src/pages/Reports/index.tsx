import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CustomText from '@/components/CustomText';
import { VolunteerGrowthChart, MinistryDistributionChart, EventsActivityChart } from '@/pages/Home/components/Dashboards';

export default function Reports() {
  const { t } = useTranslation();

  return (
    <Box>
      {/* Page Title */}
      <CustomText variant="h4" weight={700} sx={{ mb: 3 }}>
        {t('reports.title')}
      </CustomText>

      {/* Charts Section */}
      <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
        <Box sx={{ flex: '1 1 100%' }}>
          <VolunteerGrowthChart />
        </Box>
        <Box sx={{ flex: '1 1 100%' }}>
          <MinistryDistributionChart />
        </Box>
        <Box sx={{ flex: '1 1 100%' }}>
          <EventsActivityChart />
        </Box>
      </Box>
    </Box>
  );
}
