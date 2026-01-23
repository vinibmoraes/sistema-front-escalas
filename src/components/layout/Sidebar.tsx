import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Tooltip, IconButton } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Dashboard as DashboardIcon,
  Assessment as AssessmentIcon,
  People as PeopleIcon,
  Church as ChurchIcon,
  VolunteerActivism as VolunteerActivismIcon,
  FamilyRestroom as FamilyRestroomIcon,
  CalendarMonth as CalendarMonthIcon,
  Event as EventIcon,
  Settings as SettingsIcon,
  ChevronLeft,
  ChevronRight,
  Close as CloseIcon,
} from '@mui/icons-material';
import CustomText from '@/components/CustomText';

const DRAWER_WIDTH = 260;
const DRAWER_COLLAPSED_WIDTH = 72;

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  isMobile?: boolean;
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

export default function Sidebar({ collapsed, onToggle, isMobile = false, mobileOpen = false, onMobileClose }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const menuItems = [
    { path: '/dashboard', labelKey: 'menu.inicio', icon: DashboardIcon },
    { path: '/relatorios', labelKey: 'menu.relatorios', icon: AssessmentIcon },
    { path: '/usuarios', labelKey: 'menu.usuarios', icon: PeopleIcon },
    { path: '/ministerios', labelKey: 'menu.ministerios', icon: ChurchIcon },
    { path: '/voluntarios', labelKey: 'menu.voluntarios', icon: VolunteerActivismIcon },
    { path: '/familias', labelKey: 'menu.familias', icon: FamilyRestroomIcon },
    { path: '/agenda', labelKey: 'menu.agenda', icon: CalendarMonthIcon },
    { path: '/eventos-fixos', labelKey: 'menu.eventosFixos', icon: EventIcon },
    { path: '/configuracoes', labelKey: 'menu.configuracoes', icon: SettingsIcon },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMobile && onMobileClose) {
      onMobileClose();
    }
  };

  const drawerContent = (
    <>
      {/* Logo Section */}
      <Box
        sx={{
          height: 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: isMobile ? 'space-between' : (collapsed ? 'center' : 'space-between'),
          px: isMobile ? 3 : (collapsed ? 0 : 3),
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 2,
              background: 'linear-gradient(135deg, #4A90E2 0%, #3B7AC7 100%)',
              boxShadow: '0 4px 12px rgba(74, 144, 226, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 700,
              fontSize: '1.25rem',
            }}
          >
            M
          </Box>
          {(isMobile || !collapsed) && (
            <Box>
              <CustomText color="white" weight={600} size="1rem" lineHeight={1.2}>
                {t('appName')}
              </CustomText>
              <CustomText color="rgba(255, 255, 255, 0.6)" size="0.75rem">
                {t('appSubtitle')}
              </CustomText>
            </Box>
          )}
        </Box>
        {isMobile ? (
          <IconButton onClick={onMobileClose} size="small" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            <CloseIcon />
          </IconButton>
        ) : (
          !collapsed && (
            <IconButton onClick={onToggle} size="small" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              <ChevronLeft />
            </IconButton>
          )
        )}
      </Box>

      {/* Collapse Button (when collapsed - desktop only) */}
      {!isMobile && collapsed && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
          <IconButton onClick={onToggle} size="small" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            <ChevronRight />
          </IconButton>
        </Box>
      )}

      {/* Menu Items */}
      <List sx={{ px: 2, py: 2 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          const showText = isMobile || !collapsed;

          const button = (
            <ListItemButton
              key={item.path}
              selected={isActive}
              onClick={() => handleNavigation(item.path)}
              sx={{
                minHeight: 48,
                justifyContent: showText ? 'flex-start' : 'center',
                px: showText ? 2 : 0,
                borderRadius: '10px',
                mb: 0.5,
                '&.Mui-selected': {
                  backgroundColor: 'rgba(74, 144, 226, 0.2)',
                  color: '#4A90E2',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: 'rgba(74, 144, 226, 0.3)',
                  },
                },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: showText ? 2 : 0,
                  justifyContent: 'center',
                  color: isActive ? '#4A90E2' : 'rgba(255, 255, 255, 0.7)',
                }}
              >
                <Icon />
              </ListItemIcon>
              {showText && (
                <ListItemText
                  primary={t(item.labelKey)}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: '0.938rem',
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? '#4A90E2' : 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                />
              )}
            </ListItemButton>
          );

          return !isMobile && collapsed ? (
            <Tooltip key={item.path} title={t(item.labelKey)} placement="right">
              {button}
            </Tooltip>
          ) : (
            button
          );
        })}
      </List>
    </>
  );

  if (isMobile) {
    return (
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
            borderRight: 'none',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    );
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? DRAWER_COLLAPSED_WIDTH : DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: collapsed ? DRAWER_COLLAPSED_WIDTH : DRAWER_WIDTH,
          boxSizing: 'border-box',
          background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
          borderRight: 'none',
          transition: 'width 0.2s ease',
          overflowX: 'hidden',
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
}
