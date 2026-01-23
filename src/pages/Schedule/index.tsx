import { useState } from 'react';
import { Box, Card, Button, ToggleButton, ToggleButtonGroup, Typography, Chip } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { mockScheduleEvents } from '@/data/mockData';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, isSameDay, isToday } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function Schedule() {
  const [view, setView] = useState<'month' | 'week'>('month');
  const currentDate = new Date();
  const days = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const getEventsForDay = (day: Date) => {
    return mockScheduleEvents.filter((event) =>
      isSameDay(new Date(event.date), day)
    );
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={(_, newView) => newView && setView(newView)}
          size="small"
        >
          <ToggleButton value="month">Mês</ToggleButton>
          <ToggleButton value="week">Semana</ToggleButton>
        </ToggleButtonGroup>
        <Button variant="contained" startIcon={<AddIcon />}>
          Novo Evento
        </Button>
      </Box>

      <Card>
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
            {format(currentDate, 'MMMM yyyy', { locale: ptBR })}
          </Typography>

          {/* Day of Week Headers */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: 1,
              mb: 1,
            }}
          >
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
              <Box key={day} sx={{ textAlign: 'center', fontWeight: 600, color: '#64748b', fontSize: '0.875rem' }}>
                {day}
              </Box>
            ))}
          </Box>

          {/* Calendar Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: 1,
            }}
          >
            {days.map((day) => {
              const events = getEventsForDay(day);
              const isCurrentDay = isToday(day);

              return (
                <Box
                  key={day.toString()}
                  sx={{
                    minHeight: view === 'month' ? 100 : 200,
                    p: 1,
                    border: '1px solid #f1f5f9',
                    borderRadius: 2,
                    bgcolor: isCurrentDay ? '#e6f5f4' : 'white',
                    borderColor: isCurrentDay ? '#4A90E2' : '#f1f5f9',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      bgcolor: '#f8fafc',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      fontWeight: isCurrentDay ? 600 : 400,
                      color: isCurrentDay ? '#4A90E2' : '#64748b',
                      mb: 0.5,
                    }}
                  >
                    {format(day, 'd')}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    {events.map((event) => (
                      <Chip
                        key={event.id}
                        label={event.title}
                        size="small"
                        sx={{
                          bgcolor: event.color,
                          color: 'white',
                          fontSize: '0.7rem',
                          height: 'auto',
                          py: 0.5,
                          '& .MuiChip-label': {
                            px: 1,
                            py: 0.5,
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
