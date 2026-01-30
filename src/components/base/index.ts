/**
 * Componentes base reutilizáveis do projeto
 *
 * Esses componentes são usados em múltiplas páginas e fornecem
 * uma base consistente para a UI do projeto.
 */

export { default as StatusChip } from './StatusChip';
export type { StatusType } from './StatusChip';

export { default as UserAvatar } from './UserAvatar';
export type { AvatarSize } from './UserAvatar';

export { default as IconBox } from './IconBox';
export type { IconBoxSize, IconBoxVariant } from './IconBox';

export { default as CardWithHeader } from './CardWithHeader';

export { default as Skeleton } from './Skeleton';
export type { SkeletonProps } from './Skeleton';

export { default as BaseDialog } from './BaseDialog';
export type { BaseDialogProps } from './BaseDialog';
