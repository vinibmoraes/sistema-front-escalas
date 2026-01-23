import { t } from 'i18next';
import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .email(t('EmailInvalido'))
    .required(t('EmailObrigatorio')),

  password: yup
    .string()
    .min(6, t('SenhaMinimo'))
    .required(t('SenhaObrigatoria')),
});
