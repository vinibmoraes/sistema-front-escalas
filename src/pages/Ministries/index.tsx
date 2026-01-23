import { Box, Card, CardContent, Typography, Grid, Button, Chip } from '@mui/material';
import { Add as AddIcon, Church as ChurchIcon } from '@mui/icons-material';
import { mockMinistries } from '@/data/mockData';

export default function Ministries() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box />
        <Button variant="contained" startIcon={<AddIcon />}>
          Novo Ministério
        </Button>
      </Box>

      <Grid container spacing={3}>
        {mockMinistries.map((ministry) => (
          <Grid item xs={12} sm={6} md={4} key={ministry.id}>
            <Card
              sx={{
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 15px -3px rgba(30, 41, 59, 0.08)',
                },
              }}
            >
              <Box sx={{ height: 6, bgcolor: ministry.color, borderTopLeftRadius: 16, borderTopRightRadius: 16 }} />
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      bgcolor: `${ministry.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: ministry.color,
                    }}
                  >
                    <ChurchIcon />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {ministry.name}
                    </Typography>
                  </Box>
                  <Chip
                    label="Ativo"
                    size="small"
                    sx={{
                      bgcolor: '#dcfce7',
                      color: '#16a34a',
                    }}
                  />
                </Box>
                <Typography variant="body2" sx={{ color: '#64748b', mb: 2 }}>
                  {ministry.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ color: '#64748b' }}>
                    Líder: {ministry.leader}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: ministry.color }}>
                    {ministry.volunteersCount} voluntários
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
