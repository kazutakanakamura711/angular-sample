export const FontSizeType = {
  Small: 'small',
  Recommendation: 'recommendation',
  Large: 'large',
} as const;

export type FontSizeType = (typeof FontSizeType)[keyof typeof FontSizeType];

export const FontSizeTypeDisplay = {
  [FontSizeType.Small]: '小',
  [FontSizeType.Recommendation]: '推奨',
  [FontSizeType.Large]: '大',
} as const;

export const FontSizeTypePercentage = {
  [FontSizeType.Small]: '75%',
  [FontSizeType.Recommendation]: '100%',
  [FontSizeType.Large]: '125%',
} as const;

export const parseFontSizeType = (type: string): FontSizeType => {
  switch (type) {
    case FontSizeType.Small:
      return FontSizeType.Small;
    case FontSizeType.Recommendation:
      return FontSizeType.Recommendation;
    case FontSizeType.Large:
      return FontSizeType.Large;
    default:
      throw new Error('Invalid FontSizeType');
  }
};
