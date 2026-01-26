import { useState } from 'react';
import { Box, Card, CardContent, Button, useMediaQuery, useTheme } from '@mui/material';
import CustomText from '@/components/CustomText';
import {
  VolunteerActivism,
  Church,
  Event,
  FamilyRestroom,
  People,
  KeyboardArrowRight,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { mockDashboardStats, mockScheduleEvents, mockMinistries } from '@/data/mockData';
import StatCard from './components/StatCard';
import EventCard from './components/EventCard';
import MinistryCard from './components/MinistryCard';
import ViewMoreDialog from '@/components/common/ViewMoreDialog';

const STAT_CARDS_CONFIG = [
  { icon: VolunteerActivism, labelKey: 'stats.volunteers', statKey: 'totalVolunteers', color: '#4A90E2' },
  { icon: Church, labelKey: 'stats.ministries', statKey: 'activeMinistries', color: '#f59e0b' },
  { icon: Event, labelKey: 'stats.events', statKey: 'upcomingEvents', color: '#8b5cf6' },
  { icon: FamilyRestroom, labelKey: 'stats.families', statKey: 'totalFamilies', color: '#0ea5e9' },
  { icon: People, labelKey: 'stats.users', statKey: 'totalUsers', color: '#ec4899' },
] as const;

export default function Home() {
  const [eventsDialogOpen, setEventsDialogOpen] = useState(false);
  const [ministriesDialogOpen, setMinistriesDialogOpen] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const itemsToShow = isMobile ? 3 : 4;

  return (
    <Box>
      <CustomText
        variant={isMobile ? 'h5' : 'h4'}
        weight={700}
        sx={{ mb: { xs: 2, sm: 3 } }}
      >
        {t('welcome')}
      </CustomText>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(5, 1fr)',
          },
          gap: { xs: 1.5, sm: 2 },
          mb: { xs: 3, sm: 4 },
        }}
      >
        {STAT_CARDS_CONFIG.map((stat) => (
          <StatCard
            key={stat.statKey}
            icon={stat.icon}
            label={t(stat.labelKey)}
            value={mockDashboardStats[stat.statKey]}
            color={stat.color}
          />
        ))}
      </Box>

      <CustomText
        variant={isMobile ? 'h6' : 'h5'}
        weight={700}
        color="text.primary"
        sx={{ mb: { xs: 1.5, sm: 2 } }}
      >
        {t('dashboard.overview')}
      </CustomText>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' },
          gap: { xs: 1.5, sm: 2 },
        }}
      >
        <Card sx={{ height: '100%' }}>
          <CardContent sx={{ p: { xs: 2, sm: 3 }, '&:last-child': { pb: { xs: 2, sm: 3 } } }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: { xs: 1.5, sm: 2 },
              }}
            >
              <CustomText variant={isMobile ? 'subtitle1' : 'h6'} weight={600}>
                {t('dashboard.upcomingEvents')}
              </CustomText>
              <Button
                size="small"
                endIcon={<KeyboardArrowRight />}
                onClick={() => setEventsDialogOpen(true)}
                sx={{
                  color: '#4A90E2',
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  minWidth: 'auto',
                  px: { xs: 1, sm: 1.5 },
                  '&:hover': { bgcolor: 'rgba(74, 144, 226, 0.08)' },
                }}
              >
                {t('viewMore')}
              </Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1, sm: 1.5 } }}>
              {mockScheduleEvents.slice(0, itemsToShow).map((event) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  ministry={event.ministry}
                  date={event.date}
                  time={event.time}
                  color={event.color}
                />
              ))}
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ height: '100%' }}>
          <CardContent sx={{ p: { xs: 2, sm: 3 }, '&:last-child': { pb: { xs: 2, sm: 3 } } }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: { xs: 1.5, sm: 2 },
              }}
            >
              <CustomText variant={isMobile ? 'subtitle1' : 'h6'} weight={600}>
                {t('dashboard.ministries')}
              </CustomText>
              <Button
                size="small"
                endIcon={<KeyboardArrowRight />}
                onClick={() => setMinistriesDialogOpen(true)}
                sx={{
                  color: '#4A90E2',
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  minWidth: 'auto',
                  px: { xs: 1, sm: 1.5 },
                  '&:hover': { bgcolor: 'rgba(74, 144, 226, 0.08)' },
                }}
              >
                {t('viewMore')}
              </Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1, sm: 1.5 } }}>
              {mockMinistries.slice(0, itemsToShow).map((ministry) => (
                <MinistryCard
                  key={ministry.id}
                  name={ministry.name}
                  volunteersCount={ministry.volunteersCount}
                  color={ministry.color}
                />
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>

      <ViewMoreDialog
        open={eventsDialogOpen}
        onClose={() => setEventsDialogOpen(false)}
        title={t('dashboard.allEvents')}
      >
        {mockScheduleEvents.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            ministry={event.ministry}
            date={event.date}
            time={event.time}
            color={event.color}
          />
        ))}
      </ViewMoreDialog>

      <ViewMoreDialog
        open={ministriesDialogOpen}
        onClose={() => setMinistriesDialogOpen(false)}
        title={t('dashboard.allMinistries')}
      >
        {mockMinistries.map((ministry) => (
          <MinistryCard
            key={ministry.id}
            name={ministry.name}
            volunteersCount={ministry.volunteersCount}
            color={ministry.color}
          />
        ))}
      </ViewMoreDialog>
    </Box>
  );
}
