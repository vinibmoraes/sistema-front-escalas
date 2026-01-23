import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Breadcrumbs,
  Link,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  onMenuClick: () => void;
  sidebarCollapsed: boolean;
}

const DRAWER_COLLAPSED_WIDTH = 72;
const DRAWER_WIDTH = 260;

const pageTitles: Record<string, { title: string; breadcrumb: string }> = {
  '/dashboard': { title: 'Painel de Controle', breadcrumb: 'Início' },
  '/usuarios': { title: 'Gerenciar Usuários', breadcrumb: 'Usuários' },
  '/ministerios': { title: 'Gerenciar Ministérios', breadcrumb: 'Ministérios' },
  '/voluntarios': { title: 'Gerenciar Voluntários', breadcrumb: 'Voluntários' },
  '/familias': { title: 'Gerenciar Famílias', breadcrumb: 'Famílias' },
  '/agenda': { title: 'Agenda de Eventos', breadcrumb: 'Agenda' },
  '/eventos-fixos': { title: 'Eventos Fixos', breadcrumb: 'Eventos Fixos' },
};

export default function Header({ onMenuClick, sidebarCollapsed }: HeaderProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const currentPage = pageTitles[location.pathname] || { title: 'Ministry Planner', breadcrumb: 'Início' };

  const user = JSON.parse(localStorage.getItem('user') || '{"name":"Usuário"}');

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e2e8f0',
        ml: sidebarCollapsed ? `${DRAWER_COLLAPSED_WIDTH}px` : `${DRAWER_WIDTH}px`,
        width: sidebarCollapsed
          ? `calc(100% - ${DRAWER_COLLAPSED_WIDTH}px)`
          : `calc(100% - ${DRAWER_WIDTH}px)`,
        transition: 'all 0.2s ease',
      }}
    >
      <Toolbar
        sx={{
          height: 72,
          px: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Left Section */}
        <Box>
          <Breadcrumbs
            sx={{
              fontSize: '0.8rem',
              color: '#64748b',
              mb: 0.5,
              '& .MuiBreadcrumbs-separator': {
                mx: 0.5,
              },
            }}
          >
            <Link
              underline="hover"
              color="inherit"
              href="/dashboard"
              onClick={(e) => {
                e.preventDefault();
                navigate('/dashboard');
              }}
              sx={{ cursor: 'pointer' }}
            >
              Início
            </Link>
            <Typography sx={{ fontSize: '0.8rem', color: '#1e293b', fontWeight: 500 }}>
              {currentPage.breadcrumb}
            </Typography>
          </Breadcrumbs>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#1e293b' }}>
            {currentPage.title}
          </Typography>
        </Box>

        {/* Right Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton size="large" sx={{ color: '#64748b' }}>
            <NotificationsIcon />
          </IconButton>

          <Box
            onClick={handleMenuOpen}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            <Avatar
              sx={{
                bgcolor: '#1a9185',
                width: 40,
                height: 40,
                fontWeight: 600,
              }}
            >
              {user.name?.charAt(0) || 'U'}
            </Avatar>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: '#1e293b', lineHeight: 1.2 }}>
                {user.name || 'Usuário'}
              </Typography>
              <Typography sx={{ fontSize: '0.75rem', color: '#64748b' }}>
                {user.role === 'admin' ? 'Administrador' : user.role === 'coordinator' ? 'Coordenador' : 'Voluntário'}
              </Typography>
            </Box>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            sx={{
              mt: 1,
              '& .MuiPaper-root': {
                borderRadius: 2,
                minWidth: 200,
              },
            }}
          >
            <MenuItem onClick={handleLogout}>
              <LogoutIcon sx={{ mr: 2, fontSize: '1.25rem' }} />
              Sair
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
