import { Card, CardContent, Box } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useTranslation } from 'react-i18next';
import CustomText from '@/components/CustomText';

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

const CustomTooltip = ({ active, payload, label, t }: any) => {
  if (active && payload && payload.length) {
    const total = payload.reduce((sum: number, entry: any) => sum + entry.value, 0);
    return (
      <Box
        sx={{
          backgroundColor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '8px',
          padding: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}
      >
        <CustomText size="0.875rem" weight={600} color="text.primary" sx={{ mb: 0.5 }}>
          {label}
        </CustomText>
        {payload.map((entry: any, index: number) => (
          <CustomText
            key={index}
            size="0.813rem"
            weight={500}
            sx={{ my: 0.5, color: entry.color }}
          >
            {entry.name}: {entry.value}
          </CustomText>
        ))}
        <CustomText
          size="0.813rem"
          color="text.secondary"
          sx={{ mt: 1, pt: 1, borderTop: '1px solid', borderColor: 'divider' }}
        >
          Total: {total} {t('reports.activities')}
        </CustomText>
      </Box>
    );
  }
  return null;
};

export default function EventsActivityChart() {
  const { t } = useTranslation();

  return (
    <Card>
      <CardContent>
        <CustomText variant="h6" weight={600} color="text.primary" sx={{ mb: 3 }}>
          {t('reports.monthlyActivities')}
        </CustomText>
        <ResponsiveContainer width="100%" height={350}>
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
            <Tooltip content={<CustomTooltip t={t} />} />
            <Legend
              wrapperStyle={{ fontSize: '0.875rem' }}
              iconType="circle"
            />
            <Bar
              dataKey="cultos"
              name={t('reports.services')}
              fill="#4A90E2"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="reunioes"
              name={t('reports.meetings')}
              fill="#f59e0b"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="eventos"
              name={t('reports.specialEvents')}
              fill="#8b5cf6"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
