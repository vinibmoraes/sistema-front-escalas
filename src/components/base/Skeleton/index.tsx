import { Skeleton as MuiSkeleton } from '@mui/material';
import type { SkeletonProps as MuiSkeletonProps } from '@mui/material/Skeleton';

export interface SkeletonProps extends MuiSkeletonProps {
  rounded?: boolean;
}

export default function Skeleton({ rounded = false, sx, ...props }: SkeletonProps) {
  return (
    <MuiSkeleton
      animation="wave"
      sx={{
        bgcolor: 'rgba(0, 0, 0, 0.06)',
        borderRadius: rounded ? 2 : 1,
        ...sx,
      }}
      {...props}
    />
  );
}
