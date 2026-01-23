import { Card, CardContent, Typography, Box } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Louvor', value: 28, color: '#1a9185' },
  { name: 'Infantil', value: 24, color: '#f59e0b' },
  { name: 'Intercessão', value: 18, color: '#8b5cf6' },
  { name: 'Mídia', value: 15, color: '#0ea5e9' },
  { name: 'Recepção', value: 22, color: '#ec4899' },
  { name: 'Jovens', value: 19, color: '#10b981' },
  { name: 'Outros', value: 8, color: '#64748b' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <Box
        sx={{
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '8px 12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: '#1e293b' }}>
          {data.name}
        </Typography>
        <Typography sx={{ fontSize: '0.813rem', color: '#64748b' }}>
          {data.value} voluntários ({((data.value / data.payload.total) * 100).toFixed(1)}%)
        </Typography>
      </Box>
    );
  }
  return null;
};

const CustomLegend = ({ payload }: any) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center', mt: 2 }}>
      {payload.map((entry: any, index: number) => (
        <Box
          key={`legend-${index}`}
          sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
        >
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: entry.color,
            }}
          />
          <Typography sx={{ fontSize: '0.813rem', color: '#64748b' }}>
            {entry.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default function MinistryDistributionChart() {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const dataWithTotal = data.map(item => ({ ...item, total }));

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#1e293b' }}>
          Distribuição por Ministério
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={dataWithTotal}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
