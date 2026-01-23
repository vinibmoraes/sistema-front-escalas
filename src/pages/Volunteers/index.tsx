import { Box, Card, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Chip } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { mockVolunteers, statusColors } from '@/data/mockData';

export default function Volunteers() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box />
        <Button variant="contained" startIcon={<AddIcon />}>
          Novo Voluntário
        </Button>
      </Box>

      <Card sx={{ mb: 3 }}>
        <Box sx={{ p: 2 }}>
          <TextField fullWidth placeholder="Buscar voluntários..." size="small" />
        </Box>
      </Card>

      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Voluntário</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell>Telefone</TableCell>
                <TableCell>Ministérios</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockVolunteers.map((volunteer) => (
                <TableRow key={volunteer.id}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ bgcolor: '#4A90E2', width: 40, height: 40 }}>
                        {volunteer.name.charAt(0)}
                      </Avatar>
                      {volunteer.name}
                    </Box>
                  </TableCell>
                  <TableCell>{volunteer.email}</TableCell>
                  <TableCell>{volunteer.phone}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                      {volunteer.ministries.map((ministry, idx) => (
                        <Chip key={idx} label={ministry} size="small" />
                      ))}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={statusColors[volunteer.status].label}
                      size="small"
                      sx={{
                        bgcolor: statusColors[volunteer.status].bg,
                        color: statusColors[volunteer.status].color,
                      }}
                    />
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
