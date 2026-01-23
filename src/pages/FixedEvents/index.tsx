import { Box, Card, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { mockFixedEvents, dayOfWeekLabels } from '@/data/mockData';

export default function FixedEvents() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box />
        <Button variant="contained" startIcon={<AddIcon />}>
          Novo Evento Fixo
        </Button>
      </Box>

      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome do Evento</TableCell>
                <TableCell>Dia da Semana</TableCell>
                <TableCell>Horário</TableCell>
                <TableCell>Ministério</TableCell>
                <TableCell>Recorrência</TableCell>
                <TableCell>Voluntários</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockFixedEvents.map((event) => (
                <TableRow key={event.id}>
                  <TableCell sx={{ fontWeight: 600 }}>{event.name}</TableCell>
                  <TableCell>{dayOfWeekLabels[event.dayOfWeek]}</TableCell>
                  <TableCell>{event.time}</TableCell>
                  <TableCell>
                    <Chip
                      label={event.ministry}
                      size="small"
                      sx={{
                        bgcolor: `${event.color}20`,
                        color: event.color,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    {event.recurrence === 'weekly' ? 'Semanal' : event.recurrence === 'biweekly' ? 'Quinzenal' : 'Mensal'}
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                      {event.volunteers.map((volunteer, idx) => (
                        <Chip key={idx} label={volunteer} size="small" />
                      ))}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
}
