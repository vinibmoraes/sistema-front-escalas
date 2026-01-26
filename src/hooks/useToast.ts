import { toast as sonnerToast } from 'sonner';

export type ToastVariant = 'default' | 'destructive' | 'success';

export interface ToastOptions {
  title: string;
  description?: string;
  variant?: ToastVariant;
}

export interface UseToastReturn {
  toast: (options: ToastOptions) => void;
}

export function useToast(): UseToastReturn {
  const toast = ({ title, description, variant = 'default' }: ToastOptions) => {
    const message = description ? `${title}\n${description}` : title;

    switch (variant) {
      case 'destructive':
        sonnerToast.error(message);
        break;
      case 'success':
        sonnerToast.success(message);
        break;
      default:
        sonnerToast(message);
    }
  };

  return { toast };
}
