import { Box, Card, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { mockFamilies } from '@/data/mockData';

export default function Families() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box />
        <Button variant="contained" startIcon={<AddIcon />}>
          Nova Família
        </Button>
      </Box>

      <Card sx={{ mb: 3 }}>
        <Box sx={{ p: 2 }}>
          <TextField fullWidth placeholder="Buscar famílias..." size="small" />
        </Box>
      </Card>

      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Família</TableCell>
                <TableCell>Membros</TableCell>
                <TableCell>Contato</TableCell>
                <TableCell>Endereço</TableCell>
                <TableCell>Data de Cadastro</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockFamilies.map((family) => (
                <TableRow key={family.id}>
                  <TableCell sx={{ fontWeight: 600 }}>{family.name}</TableCell>
                  <TableCell>{family.members}</TableCell>
                  <TableCell>{family.contact}</TableCell>
                  <TableCell>{family.address}</TableCell>
                  <TableCell>{new Date(family.createdAt).toLocaleDateString('pt-BR')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
}
