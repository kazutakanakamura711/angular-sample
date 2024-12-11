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
  Hokkaido: '01',
  Aomori: '02',
  Iwate: '03',
  Miyagi: '04',
  Akita: '05',
  Yamagata: '06',
  Fukushima: '07',
  Ibaraki: '08',
  Tochigi: '09',
  Gunma: '10',
  Saitama: '11',
  Chiba: '12',
  Tokyo: '13',
  Kanagawa: '14',
  Niigata: '15',
  Toyama: '16',
  Ishikawa: '17',
  Fukui: '18',
  Yamanashi: '19',
  Nagano: '20',
  Gifu: '21',
  Shizuoka: '22',
  Aichi: '23',
  Mie: '24',
  Shiga: '25',
  Kyoto: '26',
  Osaka: '27',
  Hyogo: '28',
  Nara: '29',
  Wakayama: '30',
  Tottori: '31',
  Shimane: '32',
  Okayama: '33',
  Hiroshima: '34',
  Yamaguchi: '35',
  Tokushima: '36',
  Kagawa: '37',
  Ehime: '38',
  Kochi: '39',
  Fukuoka: '40',
  Saga: '41',
  Nagasaki: '42',
  Kumamoto: '43',
  Oita: '44',
  Miyazaki: '45',
  Kagoshima: '46',
  Okinawa: '47',
} as const;

export type AreaNameIdType =
  (typeof AreaNameIdType)[keyof typeof AreaNameIdType];

export const AreaNameIdTypeDisplay = {
  [AreaNameIdType.Hokkaido]: '北海道',
  [AreaNameIdType.Aomori]: '青森',
  [AreaNameIdType.Iwate]: '岩手',
  [AreaNameIdType.Miyagi]: '宮城',
  [AreaNameIdType.Akita]: '秋田',
  [AreaNameIdType.Yamagata]: '山形',
  [AreaNameIdType.Fukushima]: '福島',
  [AreaNameIdType.Ibaraki]: '茨城',
  [AreaNameIdType.Tochigi]: '栃木',
  [AreaNameIdType.Gunma]: '群馬',
  [AreaNameIdType.Saitama]: '埼玉',
  [AreaNameIdType.Chiba]: '千葉',
  [AreaNameIdType.Tokyo]: '東京',
  [AreaNameIdType.Kanagawa]: '神奈川',
  [AreaNameIdType.Niigata]: '新潟',
  [AreaNameIdType.Toyama]: '富山',
  [AreaNameIdType.Ishikawa]: '石川',
  [AreaNameIdType.Fukui]: '福井',
  [AreaNameIdType.Yamanashi]: '山梨',
  [AreaNameIdType.Nagano]: '長野',
  [AreaNameIdType.Gifu]: '岐阜',
  [AreaNameIdType.Shizuoka]: '静岡',
  [AreaNameIdType.Aichi]: '愛知',
  [AreaNameIdType.Mie]: '三重',
  [AreaNameIdType.Shiga]: '滋賀',
  [AreaNameIdType.Kyoto]: '京都',
  [AreaNameIdType.Osaka]: '大阪',
  [AreaNameIdType.Hyogo]: '兵庫',
  [AreaNameIdType.Nara]: '奈良',
  [AreaNameIdType.Wakayama]: '和歌山',
  [AreaNameIdType.Tottori]: '鳥取',
  [AreaNameIdType.Shimane]: '島根',
  [AreaNameIdType.Okayama]: '岡山',
  [AreaNameIdType.Hiroshima]: '広島',
  [AreaNameIdType.Yamaguchi]: '山口',
  [AreaNameIdType.Tokushima]: '徳島',
  [AreaNameIdType.Kagawa]: '香川',
  [AreaNameIdType.Ehime]: '愛媛',
  [AreaNameIdType.Kochi]: '高知',
  [AreaNameIdType.Fukuoka]: '福岡',
  [AreaNameIdType.Saga]: '佐賀',
  [AreaNameIdType.Nagasaki]: '長崎',
  [AreaNameIdType.Kumamoto]: '熊本',
  [AreaNameIdType.Oita]: '大分',
  [AreaNameIdType.Miyazaki]: '宮崎',
  [AreaNameIdType.Kagoshima]: '鹿児島',
  [AreaNameIdType.Okinawa]: '沖縄',
} as const;

export const parseAreaNameIdType = (type: string): AreaNameIdType => {
  if (type in AreaNameIdType) {
    return type as AreaNameIdType;
  }
  throw new Error('Invalid AreaNameIdType');
};
