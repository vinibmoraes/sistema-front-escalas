import { Card, CardContent, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'Jan', volunteers: 45, newVolunteers: 5 },
  { month: 'Fev', volunteers: 52, newVolunteers: 7 },
  { month: 'Mar', volunteers: 61, newVolunteers: 9 },
  { month: 'Abr', volunteers: 68, newVolunteers: 7 },
  { month: 'Mai', volunteers: 75, newVolunteers: 7 },
  { month: 'Jun', volunteers: 85, newVolunteers: 10 },
  { month: 'Jul', volunteers: 92, newVolunteers: 7 },
  { month: 'Ago', volunteers: 98, newVolunteers: 6 },
  { month: 'Set', volunteers: 107, newVolunteers: 9 },
  { month: 'Out', volunteers: 118, newVolunteers: 11 },
  { month: 'Nov', volunteers: 126, newVolunteers: 8 },
  { month: 'Dez', volunteers: 134, newVolunteers: 8 },
];

export default function VolunteerGrowthChart() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: '#1e293b' }}>
          Crescimento de Voluntários
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis
              dataKey="month"
              stroke="#64748b"
              style={{ fontSize: '0.813rem' }}
            />
            <YAxis
              stroke="#64748b"
              style={{ fontSize: '0.813rem' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
            />
            <Legend
              wrapperStyle={{ fontSize: '0.875rem' }}
              iconType="circle"
            />
            <Line
              type="monotone"
              dataKey="volunteers"
              name="Total de Voluntários"
              stroke="#1a9185"
              strokeWidth={3}
              dot={{ fill: '#1a9185', r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="newVolunteers"
              name="Novos Voluntários"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{ fill: '#8b5cf6', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
