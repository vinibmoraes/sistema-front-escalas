/**
 * Paleta de cores centralizada do projeto
 * Use essas cores em vez de valores hardcoded
 */

export const colors = {
  // Cores principais
  primary: '#4A90E2',
  primaryDark: '#3B7AC7',
  primaryLight: '#6BA3E8',

  // Cores secundárias
  secondary: '#f59e0b',
  accent: '#8b5cf6',

  // Cores de status
  success: '#10b981',
  error: '#ec4899',
  warning: '#f59e0b',
  info: '#0ea5e9',

  // Tons de cinza (para uso em temas claros)
  gray: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },

  // Gradientes comuns
  gradients: {
    primary: 'linear-gradient(135deg, #4A90E2 0%, #3B7AC7 100%)',
    primaryHover: 'linear-gradient(135deg, #3B7AC7 0%, #3066B0 100%)',
    background: 'linear-gradient(135deg, #E8F2FA 0%, #D4E6F7 50%, #C0DAF4 100%)',
  },

  // Cores com opacidade (para overlays, backgrounds, etc)
  alpha: {
    primary: (opacity: number) => `rgba(74, 144, 226, ${opacity})`,
    white: (opacity: number) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity: number) => `rgba(0, 0, 0, ${opacity})`,
  },
} as const;

export type ColorKeys = keyof typeof colors;
