import { Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'Jan', cultos: 12, reunioes: 8, eventos: 3 },
  { month: 'Fev', cultos: 11, reunioes: 10, eventos: 2 },
  { month: 'Mar', cultos: 13, reunioes: 9, eventos: 4 },
  { month: 'Abr', cultos: 12, reunioes: 11, eventos: 3 },
  { month: 'Mai', cultos: 14, reunioes: 12, eventos: 5 },
  { month: 'Jun', cultos: 13, reunioes: 10, eventos: 4 },
  { month: 'Jul', cultos: 12, reunioes: 9, eventos: 3 },
  { month: 'Ago', cultos: 13, reunioes: 11, eventos: 2 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const total = payload.reduce((sum: number, entry: any) => sum + entry.value, 0);
    return (
      <div
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}
      >
        <p style={{ margin: 0, fontWeight: 600, fontSize: '0.875rem', color: '#1e293b' }}>
          {label}
        </p>
        {payload.map((entry: any, index: number) => (
          <p
            key={index}
            style={{
              margin: '4px 0',
              fontSize: '0.813rem',
              color: entry.color,
              fontWeight: 500,
            }}
          >
            {entry.name}: {entry.value}
          </p>
        ))}
        <p style={{ margin: '8px 0 0 0', fontSize: '0.813rem', color: '#64748b', borderTop: '1px solid #f1f5f9', paddingTop: '8px' }}>
          Total: {total} atividades
        </p>
      </div>
    );
  }
  return null;
};

export default function EventsActivityChart() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: '#1e293b' }}>
          Atividades Mensais
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
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
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ fontSize: '0.875rem' }}
              iconType="circle"
            />
            <Bar
              dataKey="cultos"
              name="Cultos"
              fill="#1a9185"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="reunioes"
              name="Reuniões"
              fill="#f59e0b"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="eventos"
              name="Eventos Especiais"
              fill="#8b5cf6"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
