import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Tooltip, IconButton } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Church as ChurchIcon,
  VolunteerActivism as VolunteerActivismIcon,
  FamilyRestroom as FamilyRestroomIcon,
  CalendarMonth as CalendarMonthIcon,
  Event as EventIcon,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';

const DRAWER_WIDTH = 260;
const DRAWER_COLLAPSED_WIDTH = 72;

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const menuItems = [
  { path: '/dashboard', label: 'Início', icon: DashboardIcon },
  { path: '/usuarios', label: 'Usuários', icon: PeopleIcon },
  { path: '/ministerios', label: 'Ministérios', icon: ChurchIcon },
  { path: '/voluntarios', label: 'Voluntários', icon: VolunteerActivismIcon },
  { path: '/familias', label: 'Famílias', icon: FamilyRestroomIcon },
  { path: '/agenda', label: 'Agenda', icon: CalendarMonthIcon },
  { path: '/eventos-fixos', label: 'Eventos Fixos', icon: EventIcon },
];

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

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
      {/* Logo Section */}
      <Box
        sx={{
          height: 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'space-between',
          px: collapsed ? 0 : 3,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 2,
              background: 'linear-gradient(135deg, #1a9185 0%, #147a70 100%)',
              boxShadow: '0 4px 12px rgba(26, 145, 133, 0.3)',
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
          {!collapsed && (
            <Box>
              <Box sx={{ color: 'white', fontWeight: 600, fontSize: '1rem', lineHeight: 1.2 }}>
                Ministry
              </Box>
              <Box sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.75rem' }}>
                Planner
              </Box>
            </Box>
          )}
        </Box>
        {!collapsed && (
          <IconButton onClick={onToggle} size="small" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            <ChevronLeft />
          </IconButton>
        )}
      </Box>

      {/* Collapse Button (when collapsed) */}
      {collapsed && (
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

          const button = (
            <ListItemButton
              key={item.path}
              selected={isActive}
              onClick={() => navigate(item.path)}
              sx={{
                minHeight: 48,
                justifyContent: collapsed ? 'center' : 'flex-start',
                px: collapsed ? 0 : 2,
                borderRadius: '10px',
                mb: 0.5,
                '&.Mui-selected': {
                  backgroundColor: 'rgba(26, 145, 133, 0.2)',
                  color: '#1a9185',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: 'rgba(26, 145, 133, 0.3)',
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
                  mr: collapsed ? 0 : 2,
                  justifyContent: 'center',
                  color: isActive ? '#1a9185' : 'rgba(255, 255, 255, 0.7)',
                }}
              >
                <Icon />
              </ListItemIcon>
              {!collapsed && (
                <ListItemText
                  primary={item.label}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: '0.938rem',
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? '#1a9185' : 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                />
              )}
            </ListItemButton>
          );

          return collapsed ? (
            <Tooltip key={item.path} title={item.label} placement="right">
              {button}
            </Tooltip>
          ) : (
            button
          );
        })}
      </List>
    </Drawer>
  );
}
