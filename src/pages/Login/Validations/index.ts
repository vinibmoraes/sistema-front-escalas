import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .email('login.validation.invalidEmail')
    .required('login.validation.emailRequired'),
  password: yup
    .string()
    .min(6, 'login.validation.passwordMin')
    .required('login.validation.passwordRequired'),
  rememberMe: yup.boolean().default(false),
});

export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email('login.validation.invalidEmail')
    .required('login.validation.emailRequired'),
});

export type LoginFormData = yup.InferType<typeof loginSchema>;
export type ForgotPasswordFormData = yup.InferType<typeof forgotPasswordSchema>;
