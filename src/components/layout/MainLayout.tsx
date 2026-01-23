import { useState } from 'react';
import { Box } from '@mui/material';
import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function MainLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const isAuthenticated = localStorage.getItem('auth_token');

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <Sidebar collapsed={sidebarCollapsed} onToggle={handleToggleSidebar} />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Header onMenuClick={handleToggleSidebar} sidebarCollapsed={sidebarCollapsed} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            animation: 'fadeIn 0.3s ease-out',
            '@keyframes fadeIn': {
              from: { opacity: 0 },
              to: { opacity: 1 },
            },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
