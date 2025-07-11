type Size = 'small' | 'normal';

interface Dimension {
  width: number;
  height: number;
}

export const LOGO_DIMENSIONS: Record<Size, Dimension> = {
  small: {
    width: 120,
    height: 24,
  },
  normal: {
    width: 198,
    height: 36,
  },
};
