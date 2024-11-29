export const AreaCategoryIdType = {
  All: '0001',
  Area: '0002',
  Easy: '0003',
  International: '0004',
} as const;

export type AreaCategoryIdType =
  (typeof AreaCategoryIdType)[keyof typeof AreaCategoryIdType];

export const AreaCategoryIdTypeDisplay = {
  [AreaCategoryIdType.All]: '全国',
  [AreaCategoryIdType.Area]: '地域',
  [AreaCategoryIdType.Easy]: 'EASY',
  [AreaCategoryIdType.International]: '国際',
} as const;

export const parseAreaCategoryIdType = (type: string): AreaCategoryIdType => {
  switch (type) {
    case AreaCategoryIdType.All:
      return AreaCategoryIdType.All;
    case AreaCategoryIdType.Area:
      return AreaCategoryIdType.Area;
    case AreaCategoryIdType.Easy:
      return AreaCategoryIdType.Easy;
    case AreaCategoryIdType.International:
      return AreaCategoryIdType.International;
    default:
      throw new Error('Invalid AreaCategoryIdType');
  }
};

export const AreaNameIdType = {
  Hokkaido: '0001',
} as const;

export type AreaNameIdType =
  (typeof AreaNameIdType)[keyof typeof AreaNameIdType];

export const AreaNameIdTypeDisplay = {
  [AreaNameIdType.Hokkaido]: '北海道',
} as const;

export const parseAreaNameIdType = (type: string): AreaNameIdType => {
  switch (type) {
    case AreaNameIdType.Hokkaido:
      return AreaNameIdType.Hokkaido;
    default:
      throw new Error('Invalid AreaNameIdType');
  }
};
