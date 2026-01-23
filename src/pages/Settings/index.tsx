import { Box } from '@mui/material';
import { Palette, Language } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import CustomText from '@/components/CustomText';
import SettingCard from './components/SettingCard';
import ThemeToggle from './components/ThemeToggle';
import LanguageSelector from './components/LanguageSelector';

export default function Settings() {
  const { t } = useTranslation();

  return (
    <Box>
      {/* Page Title */}
      <CustomText variant="h4" weight={700} sx={{ mb: 3 }}>
        {t('settings.title')}
      </CustomText>

      {/* Settings Cards */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* Theme Setting */}
        <SettingCard
          icon={<Palette sx={{ fontSize: '1.5rem' }} />}
          title={t('settings.theme.title')}
          description={t('settings.theme.description')}
          action={<ThemeToggle />}
        />

        {/* Language Setting */}
        <SettingCard
          icon={<Language sx={{ fontSize: '1.5rem' }} />}
          title={t('settings.language.title')}
          description={t('settings.language.description')}
          action={<LanguageSelector />}
        />
      </Box>
    </Box>
  );
}
