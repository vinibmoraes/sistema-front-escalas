import { Box, Card, CardContent, Typography, Grid, Chip } from '@mui/material';
import {
  VolunteerActivism,
  Church,
  Event,
  FamilyRestroom,
  People,
} from '@mui/icons-material';
import { mockDashboardStats, mockScheduleEvents, mockMinistries } from '@/data/mockData';
import { VolunteerGrowthChart, MinistryDistributionChart, EventsActivityChart } from '@/components/charts';

const statCards = [
  { icon: VolunteerActivism, label: 'Voluntários', value: mockDashboardStats.totalVolunteers, color: '#1a9185' },
  { icon: Church, label: 'Ministérios', value: mockDashboardStats.activeMinistries, color: '#f59e0b' },
  { icon: Event, label: 'Eventos', value: mockDashboardStats.upcomingEvents, color: '#8b5cf6' },
  { icon: FamilyRestroom, label: 'Famílias', value: mockDashboardStats.totalFamilies, color: '#0ea5e9' },
  { icon: People, label: 'Usuários', value: mockDashboardStats.totalUsers, color: '#ec4899' },
];

export default function Dashboard() {
  return (
    <Box>
      {/* Welcome Section */}
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
        Olá, bem-vindo de volta!
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statCards.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      bgcolor: `${stat.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: stat.color,
                    }}
                  >
                    <stat.icon />
                  </Box>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#1e293b' }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#64748b' }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Analytics Section */}
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#1e293b' }}>
        Análises e Estatísticas
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} lg={8}>
          <VolunteerGrowthChart />
        </Grid>
        <Grid item xs={12} lg={4}>
          <MinistryDistributionChart />
        </Grid>
        <Grid item xs={12}>
          <EventsActivityChart />
        </Grid>
      </Grid>

      {/* Main Content */}
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#1e293b' }}>
        Visão Geral
      </Typography>

      <Grid container spacing={3}>
        {/* Upcoming Events */}
        <Grid item xs={12} lg={7}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Próximos Eventos
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {mockScheduleEvents.slice(0, 5).map((event) => (
                  <Box
                    key={event.id}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid #f1f5f9',
                      '&:hover': {
                        bgcolor: '#f8fafc',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                      <Typography sx={{ fontWeight: 600, color: '#1e293b' }}>
                        {event.title}
                      </Typography>
                      <Chip
                        label={event.ministry}
                        size="small"
                        sx={{
                          bgcolor: `${event.color}20`,
                          color: event.color,
                          fontWeight: 500,
                        }}
                      />
                    </Box>
                    <Typography variant="body2" sx={{ color: '#64748b' }}>
                      {new Date(event.date).toLocaleDateString('pt-BR')} às {event.time}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Ministries Overview */}
        <Grid item xs={12} lg={5}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Ministérios
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {mockMinistries.slice(0, 6).map((ministry) => (
                  <Box
                    key={ministry.id}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid #f1f5f9',
                      '&:hover': {
                        bgcolor: '#f8fafc',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        bgcolor: ministry.color,
                      }}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography sx={{ fontWeight: 600, color: '#1e293b', fontSize: '0.938rem' }}>
                        {ministry.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.813rem' }}>
                        {ministry.volunteersCount} voluntários
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
