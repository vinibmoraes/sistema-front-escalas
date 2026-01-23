import { Switch, Box } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { mode, toggleTheme } = useTheme();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <LightMode sx={{ fontSize: '1.25rem', color: mode === 'light' ? '#f59e0b' : 'text.secondary' }} />
      <Switch
        checked={mode === 'dark'}
        onChange={toggleTheme}
        sx={{
          '& .MuiSwitch-switchBase.Mui-checked': {
            color: '#4A90E2',
            '&:hover': {
              backgroundColor: 'rgba(74, 144, 226, 0.08)',
            },
          },
          '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: '#4A90E2',
          },
        }}
      />
      <DarkMode sx={{ fontSize: '1.25rem', color: mode === 'dark' ? '#4A90E2' : 'text.secondary' }} />
    </Box>
  );
}
