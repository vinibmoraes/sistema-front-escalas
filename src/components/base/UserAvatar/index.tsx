import { Avatar, Box, AvatarProps } from '@mui/material';
import CustomText from '@/components/CustomText';
import { colors } from '@/themes/colors';

export type AvatarSize = 'small' | 'medium' | 'large';

interface UserAvatarProps extends Omit<AvatarProps, 'size'> {
  name: string;
  role?: string;
  avatarColor?: string;
  size?: AvatarSize;
  showInfo?: boolean;
}

const sizeConfig: Record<AvatarSize, { width: number; height: number; fontSize: string; roleSize: string }> = {
  small: { width: 32, height: 32, fontSize: '0.875rem', roleSize: '0.75rem' },
  medium: { width: 40, height: 40, fontSize: '1rem', roleSize: '0.813rem' },
  large: { width: 56, height: 56, fontSize: '1.25rem', roleSize: '0.938rem' },
};

export default function UserAvatar({
  name,
  role,
  avatarColor = colors.primary,
  size = 'medium',
  showInfo = true,
  sx,
  ...rest
}: UserAvatarProps) {
  const config = sizeConfig[size];
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  if (!showInfo) {
    return (
      <Avatar
        sx={{
          bgcolor: avatarColor,
          width: config.width,
          height: config.height,
          fontSize: config.fontSize,
          fontWeight: 600,
          ...sx,
        }}
        {...rest}
      >
        {initials}
      </Avatar>
    );
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: size === 'small' ? 1 : 1.5 }}>
      <Avatar
        sx={{
          bgcolor: avatarColor,
          width: config.width,
          height: config.height,
          fontSize: config.fontSize,
          fontWeight: 600,
          ...sx,
        }}
        {...rest}
      >
        {initials}
      </Avatar>
      <Box>
        <CustomText weight={600} size={config.fontSize} color="text.primary">
          {name}
        </CustomText>
        {role && (
          <CustomText variant="body2" color="text.secondary" size={config.roleSize}>
            {role}
          </CustomText>
        )}
      </Box>
    </Box>
  );
}
