# 📋 Ministry Planner - Manual de Clonagem Completo

> **OBJETIVO DESTE DOCUMENTO**: Permitir a recriação EXATA deste projeto do zero, mantendo PIXEL PERFECT todo o design, comportamento e experiência do usuário.

---

## 📑 Índice

1. [Visão Geral do Projeto](#1-visão-geral-do-projeto)
2. [Stack Tecnológica Completa](#2-stack-tecnológica-completa)
3. [Estrutura de Pastas Detalhada](#3-estrutura-de-pastas-detalhada)
4. [Design e Identidade Visual](#4-design-e-identidade-visual)
5. [Sistema de Cores (Valores Exatos)](#5-sistema-de-cores-valores-exatos)
6. [Tipografia e Fontes](#6-tipografia-e-fontes)
7. [Espaçamentos e Layout](#7-espaçamentos-e-layout)
8. [Componentização Completa](#8-componentização-completa)
9. [Páginas e Fluxos](#9-páginas-e-fluxos)
10. [Sistema de Estilos Dual](#10-sistema-de-estilos-dual)
11. [Configurações de Build](#11-configurações-de-build)
12. [Passo a Passo - Recriação do Zero](#12-passo-a-passo---recriação-do-zero)
13. [Checklist de Validação Visual](#13-checklist-de-validação-visual)

---

## 1. Visão Geral do Projeto

### 1.1 Objetivo do Sistema
Sistema de gestão de escalas para igrejas e organizações religiosas, permitindo:
- Gerenciamento de voluntários e ministérios
- Criação e visualização de escalas/agendas
- Organização de famílias
- Administração de usuários
- Eventos fixos recorrentes

### 1.2 Público-Alvo
- Coordenadores de ministérios
- Administradores de igrejas
- Líderes de equipes voluntárias

### 1.3 Problema Que Resolve
Centraliza o gerenciamento de voluntários, escalas e eventos em uma interface moderna e intuitiva, eliminando planilhas e comunicação descentralizada.

---

## 2. Stack Tecnológica Completa

### 2.1 Core Framework
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "typescript": "^5.8.3",
  "vite": "^5.4.19"
}
```

### 2.2 UI Frameworks (Dual System)
```json
{
  "@mui/material": "^7.3.7",
  "@mui/icons-material": "^7.3.7",
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.1",
  "tailwindcss": "^3.4.17"
}
```

### 2.3 Routing & State
```json
{
  "react-router-dom": "^6.30.1",
  "@tanstack/react-query": "^5.83.0"
}
```

### 2.4 Forms & Validation
```json
{
  "react-hook-form": "^7.61.1",
  "@hookform/resolvers": "^3.10.0",
  "zod": "^3.25.76"
}
```

### 2.5 Utilities
```json
{
  "axios": "^1.13.2",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.6.0",
  "date-fns": "^3.6.0",
  "lucide-react": "^0.462.0",
  "sonner": "^1.7.4"
}
```

---

## 3. Estrutura de Pastas Detalhada

```
ministry-planner/
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx            # Cabeçalho (72px altura)
│   │   │   ├── MainLayout.tsx        # Layout principal com auth guard
│   │   │   └── Sidebar.tsx           # Sidebar (260px/72px collapsed)
│   │   └── ui/                        # 56 componentes shadcn/ui
│   │
│   ├── data/
│   │   └── mockData.ts               # Dados mock + interfaces TypeScript
│   │
│   ├── hooks/
│   │   ├── use-mobile.tsx            # Detecta breakpoint mobile
│   │   └── use-toast.ts              # Sistema de notificações
│   │
│   ├── lib/
│   │   └── utils.ts                  # Função cn() para merge classes
│   │
│   ├── pages/
│   │   ├── Dashboard.tsx             # Página inicial com estatísticas
│   │   ├── Login.tsx                 # Autenticação
│   │   ├── Users.tsx                 # Gerenciamento de usuários
│   │   ├── Ministries.tsx            # Gerenciamento ministérios (cards)
│   │   ├── Volunteers.tsx            # Gerenciamento voluntários
│   │   ├── Families.tsx              # Gerenciamento famílias
│   │   ├── Schedule.tsx              # Calendário mensal/semanal
│   │   ├── FixedEvents.tsx           # Eventos fixos recorrentes
│   │   ├── ForgotPassword.tsx        # Recuperação de senha
│   │   ├── AcceptInvite.tsx          # Aceitar convite usuário
│   │   ├── Index.tsx                 # Landing page
│   │   └── NotFound.tsx              # Página 404
│   │
│   ├── services/
│   │   └── api.ts                    # Axios + interceptors + mock APIs
│   │
│   ├── theme/
│   │   └── muiTheme.ts               # Tema completo Material-UI
│   │
│   ├── App.tsx                        # Componente raiz com rotas
│   ├── index.css                      # Tailwind + design system
│   └── main.tsx                       # Entry point React
│
├── components.json                    # Config shadcn/ui
├── tailwind.config.ts                 # Config Tailwind
├── vite.config.ts                     # Config Vite
└── package.json                       # Dependências
```

---

## 4. Design e Identidade Visual

### 4.1 Conceito Visual
- **Estilo**: Clean, Moderno, Profissional
- **Abordagem**: Minimalista com foco em usabilidade
- **Tom**: Welcoming (acolhedor) e confiável

### 4.2 Princípios de Design
1. **Clareza**: Hierarquia visual clara
2. **Consistência**: Padrões repetidos em todas as telas
3. **Respiração**: Uso generoso de espaçamento
4. **Feedback**: Estados visuais para todas as interações
5. **Acessibilidade**: Contraste adequado e legibilidade

---

## 5. Sistema de Cores (Valores Exatos)

### 5.1 Cores Primárias (Teal)

#### Material-UI Theme
```typescript
primary: {
  main: '#2563eb',        // Cor principal
  light: '#eff6ff',       // Background claro
  dark: '#1d4ed8',        // Hover/pressed
  contrastText: '#ffffff' // Texto sobre primary
}
```

#### Tailwind CSS Variables (HSL)
```css
--primary: 173 58% 39%;              /* hsl(173, 58%, 39%) = #2563eb */
--primary-foreground: 0 0% 100%;     /* Branco */
--primary-light: 173 58% 95%;        /* Background suave */
--primary-hover: 173 58% 32%;        /* Hover state */
```

### 5.2 Cores Secundárias

```typescript
secondary: {
  main: '#64748b',        // Slate
  light: '#f1f5f9',       // Background
  dark: '#475569',        // Dark variant
  contrastText: '#ffffff'
}
```

### 5.3 Cores de Feedback

#### Error/Destructive
```typescript
error: { main: '#ef4444', light: '#fef2f2', dark: '#dc2626' }
```

#### Warning
```typescript
warning: { main: '#f59e0b', light: '#fffbeb', dark: '#d97706' }
```

#### Success
```typescript
success: { main: '#22c55e', light: '#f0fdf4', dark: '#16a34a' }
```

#### Info
```typescript
info: { main: '#0ea5e9', light: '#f0f9ff', dark: '#0284c7' }
```

### 5.4 Cores de Background

```typescript
background: {
  default: '#f8fafc',     // Background geral da aplicação
  paper: '#ffffff'        // Cards e surfaces
}

text: {
  primary: '#1e293b',     // Texto principal
  secondary: '#64748b'    // Texto secundário
}

divider: '#e2e8f0'
```

### 5.5 Cores da Sidebar (Dark)

```css
--sidebar-background: 220 20% 14%;      /* #1e293b */
--sidebar-foreground: 210 20% 90%;
--sidebar-primary: 173 58% 50%;
--sidebar-accent: 220 20% 20%;          /* Hover state */
```

**Gradiente da Sidebar**:
```css
background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
```

### 5.6 Cores dos Ministérios (Event Colors)

**Paleta de cores para ministérios** (usado no color picker):
```javascript
const colorOptions = [
  '#2563eb',  // Teal
  '#f59e0b',  // Amber
  '#8b5cf6',  // Violet
  '#0ea5e9',  // Sky
  '#ec4899',  // Pink
  '#22c55e',  // Green
  '#ef4444',  // Red
  '#6366f1',  // Indigo
];
```

### 5.7 Status Badges Colors

```javascript
const statusColors = {
  active: {
    bg: '#dcfce7',      // Verde claro
    color: '#16a34a',   // Verde escuro
    label: 'Ativo'
  },
  inactive: {
    bg: '#fee2e2',      // Vermelho claro
    color: '#dc2626',   // Vermelho escuro
    label: 'Inativo'
  },
  pending: {
    bg: '#fef3c7',      // Amarelo claro
    color: '#d97706',   // Amarelo escuro
    label: 'Pendente'
  }
};
```

### 5.8 Sombras (Shadows)

```typescript
// MUI Custom Shadows (valores principais)
shadows: [
  'none',
  '0 1px 2px 0 rgba(30, 41, 59, 0.05)',                                      // sm
  '0 1px 3px 0 rgba(30, 41, 59, 0.08), 0 1px 2px 0 rgba(30, 41, 59, 0.04)', // base
  '0 4px 6px -1px rgba(30, 41, 59, 0.08), 0 2px 4px -1px rgba(30, 41, 59, 0.04)', // md
  '0 10px 15px -3px rgba(30, 41, 59, 0.08), 0 4px 6px -2px rgba(30, 41, 59, 0.04)', // lg
  '0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 10px 10px -5px rgba(30, 41, 59, 0.04)', // xl
  // índices 6-24 repetem o último valor
]
```

---

## 6. Tipografia e Fontes

### 6.1 Font Family

```css
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* Font Stack */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

**Pesos utilizados**:
- 300 - Light
- 400 - Regular (texto corpo)
- 500 - Medium (botões, labels)
- 600 - Semibold (subtítulos)
- 700 - Bold (títulos principais)

### 6.2 Typography Scale (MUI)

```typescript
typography: {
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",

  h1: { fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em' },
  h2: { fontSize: '2rem', fontWeight: 600, lineHeight: 1.3, letterSpacing: '-0.01em' },
  h3: { fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.4 },
  h4: { fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.4 },
  h5: { fontSize: '1.125rem', fontWeight: 600, lineHeight: 1.5 },
  h6: { fontSize: '1rem', fontWeight: 600, lineHeight: 1.5 },
  body1: { fontSize: '1rem', lineHeight: 1.6 },
  body2: { fontSize: '0.875rem', lineHeight: 1.5 },
  button: { textTransform: 'none', fontWeight: 500 }  // IMPORTANTE: Sem uppercase
}
```

---

## 7. Espaçamentos e Layout

### 7.1 Grid de Espaçamento Base

**Sistema**: Múltiplos de 8px (Material Design)

```
4px  = 0.5    16px = 2    32px = 4    64px = 8
8px  = 1      20px = 2.5  40px = 5
12px = 1.5    24px = 3    48px = 6
```

### 7.2 Dimensões Fixas

#### Sidebar
- **Expandida**: `260px`
- **Colapsada**: `72px`
- **Transição**: `0.2s ease`
- **Logo height**: `72px`
- **Item height**: `48px`

#### Header
- **Altura**: `72px` (fixo)
- **Padding horizontal**: `24px`
- **Border bottom**: `1px solid #e2e8f0`

#### Content Area
- **Padding**: `24px`
- **Background**: `#f8fafc`

### 7.3 Cards e Containers

#### MUI Card
```typescript
borderRadius: 16px
padding: 24px (CardContent)
boxShadow: '0 1px 3px 0 rgba(30, 41, 59, 0.08), 0 1px 2px 0 rgba(30, 41, 59, 0.04)'
border: '1px solid rgba(226, 232, 240, 0.6)'
```

#### Tailwind Card
```css
--radius: 0.75rem;  /* 12px */
```

### 7.4 Border Radius

```typescript
// MUI
shape: { borderRadius: 12 }

// Componentes específicos
MuiButton: borderRadius: 10
MuiCard: borderRadius: 16
MuiTextField: borderRadius: 10
MuiChip: borderRadius: 8
MuiDialog: borderRadius: 16
MuiListItemButton: borderRadius: 10
```

### 7.5 Responsive Breakpoints

```typescript
{
  xs: 0,      // Mobile
  sm: 600,    // Tablet
  md: 900,    // Desktop pequeno
  lg: 1200,   // Desktop
  xl: 1536    // Desktop grande
}
```

---

## 8. Componentização Completa

### 8.1 Layout Components

#### MainLayout.tsx
**Responsabilidade**: Layout wrapper principal com autenticação

**Auth Guard**:
```typescript
const isAuthenticated = localStorage.getItem('auth_token');
if (!isAuthenticated) return <Navigate to="/login" replace />;
```

**Estrutura**:
```tsx
<Box display="flex" minHeight="100vh" backgroundColor="#f8fafc">
  <Sidebar collapsed={...} onToggle={...} />
  <Box component="main" flexGrow={1}>
    <Header onMenuClick={...} sidebarCollapsed={...} />
    <Box p={3}>
      <Outlet />
    </Box>
  </Box>
</Box>
```

#### Sidebar.tsx
**Constantes**:
```typescript
const DRAWER_WIDTH = 260;
const DRAWER_COLLAPSED_WIDTH = 72;

const menuItems = [
  { path: '/dashboard', label: 'Início', icon: Dashboard },
  { path: '/usuarios', label: 'Usuários', icon: People },
  { path: '/ministerios', label: 'Ministérios', icon: Church },
  { path: '/voluntarios', label: 'Voluntários', icon: VolunteerActivism },
  { path: '/familias', label: 'Famílias', icon: FamilyRestroom },
  { path: '/agenda', label: 'Agenda', icon: CalendarMonth },
  { path: '/eventos-fixos', label: 'Eventos Fixos', icon: Event },
];
```

**Estilo do Drawer**:
```typescript
background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)'
transition: 'width 0.2s ease'
```

**Logo Box**:
```typescript
width: 40px, height: 40px, borderRadius: 2
background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'
boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
```

**Item Ativo**:
```typescript
backgroundColor: 'rgba(37, 99, 235, 0.2)'
color: '#2563eb'
fontWeight: 600
```

#### Header.tsx
**Estrutura**:
```typescript
height: 72px
backgroundColor: 'white'
borderBottom: '1px solid #e2e8f0'
position: 'sticky'
top: 0
zIndex: 100
```

**Breadcrumbs**: `fontSize: '0.8rem'`, formato: Início > Página Atual

**Título**: `variant="h5"`, `fontWeight={700}`

### 8.2 Page Components

#### Dashboard.tsx
**Componentes**:
1. **Welcome Section**: "Olá, bem-vindo de volta! 👋" (h4, weight 700)
2. **StatCard** (5 cards)
   - Grid: `size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}`
   - Ícone: 48x48, borderRadius 2
   - Cores específicas: teal, amber, violet, sky, pink
3. **Upcoming Events** (Grid lg: 7)
4. **Ministries Overview** (Grid lg: 5)

#### Login.tsx
**Background**:
```typescript
background: 'linear-gradient(135deg, #f0fdfa 0%, #e0f2fe 50%, #f0f9ff 100%)'
```

**Card**:
```typescript
maxWidth: 440px
boxShadow: '0 20px 40px -10px rgba(37, 99, 235, 0.15)'
padding: { xs: 3, sm: 5 }
```

**Logo Box**:
```typescript
width: 64px, height: 64px, borderRadius: 3
background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'
boxShadow: '0 8px 20px -4px rgba(37, 99, 235, 0.4)'
```

**Botões**:
- Login: gradient teal, fullWidth, py: 1.5
- Google: outlined, borderColor: #e2e8f0

#### Users.tsx / Volunteers.tsx
**Estrutura Comum**:
1. Header com botão "Novo"
2. Search Card (py: 2)
3. Table Card com TableContainer

**Table Header**:
```typescript
fontWeight: 600
backgroundColor: '#f8fafc'
color: '#475569'
padding: '16px'
borderBottom: '1px solid #f1f5f9'
```

**Avatar**: `bgcolor: '#2563eb'`, 36-40px

**Chips de Status**: cores específicas por status

#### Ministries.tsx
**Layout**: Grid de Cards (xs: 12, sm: 6, md: 4)

**Card**:
```typescript
hover: transform: 'translateY(-2px)', shadow elevado
```

**Top Color Bar**: `height: 6px`, borderRadius top 16px

**Icon Box**: 48x48, bg 20% opacity da cor

**Color Picker**: 8 cores, boxes 36x36, border 3px quando selecionado

#### Schedule.tsx
**View Toggle**: ToggleButtonGroup (month/week)

**Calendar Grid**:
```typescript
display: 'grid'
gridTemplateColumns: 'repeat(7, 1fr)'
gap: 1
minHeight: view === 'month' ? 100 : 200
```

**Today Cell**: `bg: '#eff6ff'`, `border: '#2563eb'`

**Event Badge**:
```typescript
backgroundColor: event.color
color: 'white'
fontSize: '0.7rem'
px: 1, py: 0.5
```

---

## 9. Páginas e Fluxos

### 9.1 Estrutura de Rotas

```typescript
// Public
/login
/recuperar-senha
/aceitar-convite

// Protected (wrapped in MainLayout)
/dashboard
/usuarios
/ministerios
/voluntarios
/familias
/agenda
/eventos-fixos

// Redirects
/ → /login
* → /login
```

### 9.2 Fluxo de Autenticação

1. **Acesso** → Redirect para `/login`
2. **Login**:
   - Validação básica
   - Simula 1s loading
   - Salva `auth_token` e `user` no localStorage
   - Navigate para `/dashboard`
3. **Logout**:
   - Remove tokens do localStorage
   - Navigate para `/login`

### 9.3 Interações e Feedback

#### Hover States
- **Buttons**: boxShadow elevation
- **Cards**: translateY(-2px)
- **Table Rows**: background subtle gray
- **Sidebar Items**: background rgba(255,255,255,0.08)

#### Transições
```typescript
transition: 'all 0.2s ease'  // Padrão
transition: 'width 0.2s ease' // Sidebar
animation: 'fadeIn 0.3s ease-out' // Page entrance
```

### 9.4 Animações CSS

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}
```

---

## 10. Sistema de Estilos Dual

### 10.1 Por Que Dual System?

- **MUI**: Usado nas páginas principais para consistência
- **Tailwind + shadcn/ui**: Preparado para componentes auxiliares

### 10.2 Material-UI Configuration

**Arquivo**: `src/theme/muiTheme.ts`

Tema completo com:
- Palette personalizado
- Typography com Inter
- Shape borderRadius: 12
- Shadows customizados
- Component overrides

### 10.3 Tailwind CSS Configuration

**Arquivo**: `tailwind.config.ts`

```typescript
export default {
  darkMode: ["class"],
  theme: {
    extend: {
      colors: { /* CSS variables */ },
      borderRadius: { lg: "var(--radius)", md: "calc(var(--radius) - 2px)" }
    }
  },
  plugins: [require("tailwindcss-animate")]
}
```

### 10.4 Utility Function: cn()

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 11. Configurações de Build

### 11.1 Vite Configuration

```typescript
export default defineConfig(({ mode }) => ({
  server: { host: "::", port: 8080, hmr: { overlay: false } },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } }
}));
```

### 11.2 Scripts NPM

```json
{
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "test": "vitest run"
}
```

---

## 12. Passo a Passo - Recriação do Zero

### FASE 1: Setup Inicial

```bash
# 1. Criar projeto
npm create vite@latest ministry-planner -- --template react-swc-ts
cd ministry-planner

# 2. Instalar dependências core
npm install react@^18.3.1 react-dom@^18.3.1
npm install react-router-dom@^6.30.1
npm install @mui/material@^7.3.7 @mui/icons-material@^7.3.7
npm install @emotion/react@^11.14.0 @emotion/styled@^11.14.1
npm install axios@^1.13.2

# 3. Instalar Tailwind
npm install -D tailwindcss@^3.4.17 postcss autoprefixer
npx tailwindcss init -p

# 4. Instalar shadcn/ui deps
npm install @radix-ui/react-dialog @radix-ui/react-slot
npm install class-variance-authority clsx tailwind-merge
npm install lucide-react sonner

# 5. Instalar outras deps
npm install @tanstack/react-query react-hook-form zod date-fns
```

### FASE 2: Configuração

1. **Configurar Path Aliases** (vite.config.ts, tsconfig.json)
2. **Criar components.json**
3. **Criar src/index.css** (completo com CSS variables)
4. **Criar src/lib/utils.ts** (função cn)
5. **Criar src/theme/muiTheme.ts** (tema MUI completo)

### FASE 3: Estrutura

```bash
mkdir -p src/components/layout src/components/ui
mkdir -p src/data src/hooks src/pages src/services src/theme
```

### FASE 4: Componentes

1. **Criar src/data/mockData.ts** (interfaces + dados)
2. **Criar src/services/api.ts** (axios + interceptors)
3. **Criar Layout Components** (MainLayout, Sidebar, Header)
4. **Criar Page Components** (Dashboard, Login, Users, etc)

### FASE 5: App Root

1. **Criar src/App.tsx** (rotas + ThemeProvider)
2. **Atualizar src/main.tsx**

### FASE 6: Testing

```bash
npm run dev
# Abrir http://localhost:8080
# Testar login → dashboard → navegação
```

---

## 13. Checklist de Validação Visual

### Login Page
- [ ] Background gradient: #f0fdfa → #e0f2fe → #f0f9ff
- [ ] Card maxWidth 440px
- [ ] Logo 64x64, gradient teal, shadow
- [ ] Título "Bem-vindo de volta" h4, weight 700
- [ ] Botão login gradient fullWidth
- [ ] Botão Google outline

### Sidebar
- [ ] Width: 260px expandida, 72px colapsada
- [ ] Background: gradient #1e293b → #0f172a
- [ ] Logo: 40x40, borderRadius 8px, gradient teal
- [ ] Active item: bg rgba(37, 99, 235, 0.2)
- [ ] Hover: bg rgba(255,255,255,0.08)
- [ ] Transition: 0.2s ease

### Header
- [ ] Height: 72px fixo
- [ ] Background: white
- [ ] Border bottom: 1px #e2e8f0
- [ ] Breadcrumbs: fontSize 0.8rem
- [ ] Title: h5, weight 700

### Dashboard
- [ ] 5 stat cards em Grid lg: 2.4
- [ ] Cores: teal, amber, violet, sky, pink
- [ ] Icon box: 48x48, borderRadius 8px
- [ ] Events section: Grid lg: 7
- [ ] Ministries: Grid lg: 5

### Tables
- [ ] Header: bg #f8fafc, weight 600
- [ ] Avatar: 36-40px, bgcolor teal
- [ ] Status chips: cores específicas
- [ ] Row hover: background subtle

### Cards
- [ ] borderRadius: 16px
- [ ] Hover: translateY(-2px), shadow
- [ ] Padding: 24px

### Buttons
- [ ] Primary: gradient teal
- [ ] borderRadius: 10px
- [ ] textTransform: none
- [ ] fontWeight: 500

### Inputs
- [ ] borderRadius: 10px
- [ ] Focus: border teal, width 2px

### Animations
- [ ] Page entrance: fadeIn 0.3s
- [ ] Transitions: all 0.2s ease

### Responsive
- [ ] Mobile (< 600px): 1 column
- [ ] Tablet (600-900px): 2 columns
- [ ] Desktop (> 1200px): layout completo

---

## 🎯 Conclusão

Seguindo este manual, você conseguirá recriar o **Ministry Planner** PIXEL PERFECT, mantendo:

✅ Mesmas cores exatas (HEX, HSL, RGBA)
✅ Mesma tipografia (Inter, pesos, tamanhos)
✅ Mesmos espaçamentos (grid 8px)
✅ Mesmos componentes e estrutura
✅ Mesmo comportamento e interações
✅ Mesma experiência do usuário

**Arquivos Críticos**:
1. `src/index.css` - design system completo
2. `src/theme/muiTheme.ts` - tema MUI
3. `src/data/mockData.ts` - dados e interfaces
4. Layout components (MainLayout, Sidebar, Header)
5. Page components (Dashboard, Login, Users, Ministries, Volunteers, Schedule)

---

**Documento criado em**: 2026-01-22
**Versão**: 1.0.0
**Objetivo**: Clonagem pixel-perfect sem alterações de design
