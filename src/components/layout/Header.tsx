import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Breadcrumbs,
  Link,
} from '@mui/material';
import CustomText from '@/components/CustomText';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  onMenuClick: () => void;
  sidebarCollapsed: boolean;
  isMobile?: boolean;
}

const pageTitles: Record<string, { titleKey: string; breadcrumbKey: string }> = {
  '/dashboard': { titleKey: 'pageTitle.dashboard', breadcrumbKey: 'breadcrumb.inicio' },
  '/relatorios': { titleKey: 'pageTitle.reports', breadcrumbKey: 'breadcrumb.relatorios' },
  '/usuarios': { titleKey: 'pageTitle.users', breadcrumbKey: 'breadcrumb.usuarios' },
  '/ministerios': { titleKey: 'pageTitle.ministries', breadcrumbKey: 'breadcrumb.ministerios' },
  '/voluntarios': { titleKey: 'pageTitle.volunteers', breadcrumbKey: 'breadcrumb.voluntarios' },
  '/familias': { titleKey: 'pageTitle.families', breadcrumbKey: 'breadcrumb.familias' },
  '/agenda': { titleKey: 'pageTitle.schedule', breadcrumbKey: 'breadcrumb.agenda' },
  '/eventos-fixos': { titleKey: 'pageTitle.fixedEvents', breadcrumbKey: 'breadcrumb.eventosFixos' },
  '/configuracoes': { titleKey: 'pageTitle.settings', breadcrumbKey: 'breadcrumb.configuracoes' },
};

export default function Header({ onMenuClick, sidebarCollapsed, isMobile = false }: HeaderProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

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

  const currentPage = pageTitles[location.pathname] || { titleKey: 'pageTitle.dashboard', breadcrumbKey: 'breadcrumb.inicio' };

  const user = JSON.parse(localStorage.getItem('user') || '{"name":"Usuário"}');

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
        width: '100%',
      }}
    >
      <Toolbar
        sx={{
          height: { xs: 64, sm: 72 },
          px: { xs: 2, sm: 3 },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Left Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, sm: 2 } }}>
          {isMobile && (
            <IconButton
              onClick={onMenuClick}
              size="medium"
              sx={{ color: 'text.secondary', ml: -1 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Box>
            <Breadcrumbs
              sx={{
                fontSize: { xs: '0.7rem', sm: '0.8rem' },
                color: 'text.secondary',
                mb: 0.5,
                '& .MuiBreadcrumbs-separator': {
                  mx: 0.5,
                },
                display: { xs: 'none', sm: 'flex' },
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
                {t('home')}
              </Link>
              <CustomText size="0.8rem" color="text.primary" weight={500}>
                {t(currentPage.breadcrumbKey)}
              </CustomText>
            </Breadcrumbs>
            <CustomText
              variant={isMobile ? 'h6' : 'h5'}
              weight={700}
              color="text.primary"
            >
              {t(currentPage.titleKey)}
            </CustomText>
          </Box>
        </Box>

        {/* Right Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
          <IconButton size={isMobile ? 'medium' : 'large'} sx={{ color: 'text.secondary' }}>
            <NotificationsIcon />
          </IconButton>

          <Box
            onClick={handleMenuOpen}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1, sm: 1.5 },
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            <Avatar
              sx={{
                bgcolor: '#4A90E2',
                width: { xs: 36, sm: 40 },
                height: { xs: 36, sm: 40 },
                fontWeight: 600,
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            >
              {user.name?.charAt(0) || 'U'}
            </Avatar>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <CustomText size="0.875rem" weight={600} color="text.primary" lineHeight={1.2}>
                {user.name || 'Usuário'}
              </CustomText>
              <CustomText size="0.75rem" color="text.secondary">
                {user.role === 'admin' ? t('roles.admin') : user.role === 'coordinator' ? t('roles.coordinator') : t('roles.volunteer')}
              </CustomText>
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
              {t('logout')}
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
