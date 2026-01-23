# Componentes Base

Componentes reutilizáveis que fornecem uma base consistente para a UI do projeto.

## 📦 Componentes Disponíveis

### StatusChip

Chip para exibir status com cores padronizadas.

**Uso:**
```tsx
import { StatusChip } from '@/components/base';

<StatusChip status="active" />
<StatusChip status="pending" label="Aguardando" />
<StatusChip status="inactive" size="medium" />
```

**Props:**
- `status`: 'active' | 'inactive' | 'pending' | 'approved' | 'rejected'
- `label?`: string (opcional - usa label padrão se não fornecido)
- `size?`: 'small' | 'medium' (padrão: 'small')

---

### UserAvatar

Avatar de usuário com informações opcionais (nome e role).

**Uso:**
```tsx
import { UserAvatar } from '@/components/base';

<UserAvatar name="João Silva" role="Administrador" />
<UserAvatar name="Maria Santos" size="small" />
<UserAvatar name="Pedro Costa" showInfo={false} />
```

**Props:**
- `name`: string (obrigatório)
- `role?`: string
- `avatarColor?`: string (padrão: cores.primary)
- `size?`: 'small' | 'medium' | 'large' (padrão: 'medium')
- `showInfo?`: boolean (padrão: true)

---

### IconBox

Container para ícones com variantes de estilo.

**Uso:**
```tsx
import { IconBox } from '@/components/base';
import { Church } from '@mui/icons-material';

<IconBox icon={Church} color="#4A90E2" />
<IconBox icon={Church} color="#f59e0b" size="large" variant="filled" />
<IconBox icon={Church} color="#8b5cf6" variant="outlined" rounded={false} />
```

**Props:**
- `icon`: ElementType | ReactNode (obrigatório)
- `color`: string (obrigatório)
- `size?`: 'small' | 'medium' | 'large' (padrão: 'medium')
- `variant?`: 'filled' | 'outlined' | 'soft' (padrão: 'soft')
- `rounded?`: boolean (padrão: true)

---

### CardWithHeader

Card com header padronizado (título + ação opcional).

**Uso:**
```tsx
import { CardWithHeader } from '@/components/base';
import { Button } from '@mui/material';

<CardWithHeader
  title="Próximos Eventos"
  action={<Button>Ver Mais</Button>}
>
  {/* Conteúdo do card */}
</CardWithHeader>
```

**Props:**
- `title`: string (obrigatório)
- `action?`: ReactNode
- `children`: ReactNode (obrigatório)
- `headerSx?`: SxProps
- `contentGap?`: number (padrão: 1.5)

---

## 🎨 Paleta de Cores

Use a paleta centralizada em vez de cores hardcoded:

```tsx
import { colors } from '@/themes/colors';

// Cores principais
colors.primary        // #4A90E2
colors.primaryDark    // #3B7AC7
colors.secondary      // #f59e0b

// Cores de status
colors.success        // #10b981
colors.error          // #ec4899
colors.warning        // #f59e0b
colors.info           // #0ea5e9

// Gradientes
colors.gradients.primary
colors.gradients.primaryHover

// Cores com opacidade
colors.alpha.primary(0.1)
colors.alpha.white(0.9)
```

---

## 🏗️ Estrutura de Componentes

```
src/components/
├── base/              # Componentes base reutilizáveis
│   ├── StatusChip/
│   ├── UserAvatar/
│   ├── IconBox/
│   ├── CardWithHeader/
│   └── index.ts      # Exportações
├── common/            # Componentes comuns (dialogs, etc)
└── layout/            # Componentes de layout
```

---

## ✅ Boas Práticas

1. **Sempre use componentes base** em vez de criar componentes novos similares
2. **Use a paleta de cores** centralizada em `src/themes/colors.ts`
3. **Documente** novos componentes base adicionados
4. **Teste** componentes em múltiplos contextos antes de adicionar
5. **Mantenha** componentes pequenos e focados em uma responsabilidade

---

## 📝 Contribuindo

Ao adicionar novos componentes base:

1. Crie a pasta do componente em `src/components/base/`
2. Exporte no `index.ts`
3. Documente neste README
4. Use TypeScript para tipar props
5. Garanta que o componente seja realmente reutilizável (usado em 2+ lugares)
