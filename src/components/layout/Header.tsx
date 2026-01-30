import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
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
import { ROUTES } from '@/constants/routes';

interface HeaderProps {
  onMenuClick: () => void;
  isMobile?: boolean;
}

const pageTitles: Record<string, string> = {
  [ROUTES.HOME]: 'pageTitle.home',
  [ROUTES.REPORTS]: 'pageTitle.reports',
  [ROUTES.USERS]: 'pageTitle.users',
  [ROUTES.MINISTRIES]: 'pageTitle.ministries',
  [ROUTES.VOLUNTEERS]: 'pageTitle.volunteers',
  [ROUTES.FAMILIES]: 'pageTitle.families',
  [ROUTES.SCHEDULE]: 'pageTitle.schedule',
  [ROUTES.FIXED_EVENTS]: 'pageTitle.fixedEvents',
  [ROUTES.SETTINGS]: 'pageTitle.settings',
};

export default function Header({ onMenuClick, isMobile = false }: HeaderProps) {
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
    navigate(ROUTES.LOGIN);
  };

  const currentPageTitle = pageTitles[location.pathname] || 'pageTitle.home';

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
          <CustomText
            variant={isMobile ? 'h6' : 'h5'}
            weight={700}
            color="text.primary"
          >
            {t(currentPageTitle)}
          </CustomText>
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
