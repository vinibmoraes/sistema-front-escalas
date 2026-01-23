import { createTheme } from '@mui/material/styles';

export function getTheme(mode: 'light' | 'dark') {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#4A90E2',
        light: mode === 'light' ? '#E8F2FA' : '#2B5A8F',
        dark: '#3B7AC7',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#64748b',
        light: mode === 'light' ? '#f1f5f9' : '#334155',
        dark: '#475569',
        contrastText: '#ffffff',
      },
      error: {
        main: '#ef4444',
        light: mode === 'light' ? '#fef2f2' : '#7f1d1d',
        dark: '#dc2626',
      },
      warning: {
        main: '#f59e0b',
        light: mode === 'light' ? '#fffbeb' : '#78350f',
        dark: '#d97706',
      },
      success: {
        main: '#22c55e',
        light: mode === 'light' ? '#f0fdf4' : '#14532d',
        dark: '#16a34a',
      },
      info: {
        main: '#0ea5e9',
        light: mode === 'light' ? '#f0f9ff' : '#0c4a6e',
        dark: '#0284c7',
      },
      background: {
        default: mode === 'light' ? '#f8fafc' : '#0f172a',
        paper: mode === 'light' ? '#ffffff' : '#1e293b',
      },
      text: {
        primary: mode === 'light' ? '#1e293b' : '#f1f5f9',
        secondary: mode === 'light' ? '#64748b' : '#94a3b8',
      },
      divider: mode === 'light' ? '#e2e8f0' : '#334155',
      action: {
        hover: mode === 'light' ? '#f8fafc' : 'rgba(255, 255, 255, 0.08)',
        selected: mode === 'light' ? '#e2e8f0' : 'rgba(255, 255, 255, 0.16)',
        disabled: mode === 'light' ? '#cbd5e1' : 'rgba(255, 255, 255, 0.3)',
        disabledBackground: mode === 'light' ? '#f1f5f9' : 'rgba(255, 255, 255, 0.12)',
      },
    },
    typography: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
        lineHeight: 1.3,
        letterSpacing: '-0.01em',
      },
      h3: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h4: {
        fontSize: '1.25rem',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h5: {
        fontSize: '1.125rem',
        fontWeight: 600,
        lineHeight: 1.5,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: 1.5,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.6,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.5,
      },
      button: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 12,
    },
    shadows: [
      'none',
      '0 1px 2px 0 rgba(30, 41, 59, 0.05)',
      '0 1px 3px 0 rgba(30, 41, 59, 0.08), 0 1px 2px 0 rgba(30, 41, 59, 0.04)',
      '0 4px 6px -1px rgba(30, 41, 59, 0.08), 0 2px 4px -1px rgba(30, 41, 59, 0.04)',
      '0 10px 15px -3px rgba(30, 41, 59, 0.08), 0 4px 6px -2px rgba(30, 41, 59, 0.04)',
      '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)',
      '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)',
      '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)',
      '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)',
      '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)',
      '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)',
      '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)',
      '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)',
      '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)',
      '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)',
      '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)',
      '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)',
      '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)',
      '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)',
      '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)',
      '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)',
      '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)',
      '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)',
      '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)',
      '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)',
    ],
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            padding: '10px 20px',
            fontSize: '0.938rem',
            fontWeight: 500,
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 12px rgba(74, 144, 226, 0.2)',
            },
          },
          contained: {
            background: 'linear-gradient(135deg, #4A90E2 0%, #3B7AC7 100%)',
            '&:hover': {
              background: 'linear-gradient(135deg, #3B7AC7 0%, #3066B0 100%)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: mode === 'light'
              ? '0 1px 3px 0 rgba(30, 41, 59, 0.08), 0 1px 2px 0 rgba(30, 41, 59, 0.04)'
              : '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)',
            border: mode === 'light' ? '1px solid rgba(226, 232, 240, 0.6)' : '1px solid rgba(51, 65, 85, 0.6)',
            transition: 'all 0.2s ease',
            '&:hover': {
              boxShadow: mode === 'light'
                ? '0 10px 15px -3px rgba(30, 41, 59, 0.08), 0 4px 6px -2px rgba(30, 41, 59, 0.04)'
                : '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
            },
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: 24,
            '&:last-child': {
              paddingBottom: 24,
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 10,
              '&:hover fieldset': {
                borderColor: '#4A90E2',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#4A90E2',
                borderWidth: 2,
              },
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 500,
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: 16,
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            marginBottom: 4,
            '&.Mui-selected': {
              backgroundColor: 'rgba(74, 144, 226, 0.2)',
              color: '#4A90E2',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: 'rgba(74, 144, 226, 0.3)',
              },
            },
            '&:hover': {
              backgroundColor: mode === 'light' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.05)',
            },
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            '& .MuiTableCell-head': {
              fontWeight: 600,
              backgroundColor: mode === 'light' ? '#f8fafc' : '#1e293b',
              color: mode === 'light' ? '#475569' : '#94a3b8',
              padding: '16px',
              borderBottom: mode === 'light' ? '1px solid #f1f5f9' : '1px solid #334155',
            },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: mode === 'light' ? '1px solid #f1f5f9' : '1px solid #334155',
          },
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: mode === 'light' ? '#f8fafc' : '#1e293b',
            },
          },
        },
      },
    },
  });
}
