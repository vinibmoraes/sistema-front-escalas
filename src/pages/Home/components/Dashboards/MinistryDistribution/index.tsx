import { Card, CardContent, Box } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useTranslation } from 'react-i18next';
import CustomText from '@/components/CustomText';

const data = [
  { name: 'Louvor', value: 28, color: '#4A90E2' },
  { name: 'Infantil', value: 24, color: '#f59e0b' },
  { name: 'Intercessão', value: 18, color: '#8b5cf6' },
  { name: 'Mídia', value: 15, color: '#0ea5e9' },
  { name: 'Recepção', value: 22, color: '#ec4899' },
  { name: 'Jovens', value: 19, color: '#10b981' },
  { name: 'Outros', value: 8, color: '#64748b' },
];

const CustomTooltip = ({ active, payload, t }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <Box
        sx={{
          backgroundColor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '8px',
          padding: '8px 12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}
      >
        <CustomText size="0.875rem" weight={600} color="text.primary">
          {data.name}
        </CustomText>
        <CustomText size="0.813rem" color="text.secondary">
          {data.value} {t('reports.volunteers')} ({((data.value / data.payload.total) * 100).toFixed(1)}%)
        </CustomText>
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
          <CustomText size="0.813rem" color="text.secondary">
            {entry.value}
          </CustomText>
        </Box>
      ))}
    </Box>
  );
};

export default function MinistryDistributionChart() {
  const { t } = useTranslation();
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const dataWithTotal = data.map(item => ({ ...item, total }));

  return (
    <Card>
      <CardContent>
        <CustomText variant="h6" weight={600} color="text.primary" sx={{ mb: 2 }}>
          {t('reports.ministryDistribution')}
        </CustomText>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={dataWithTotal}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={110}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip t={t} />} />
            <Legend content={<CustomLegend />} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
