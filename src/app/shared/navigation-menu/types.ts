export const ScreenIdType = {
  CreateManuscript: 'AAATS01',
  InternetOrder: 'AAATS02',
  ContentForInternet: 'AAATS03',
  Links: 'AAATS04',
  DataBroadcasting: 'AAATS05',
  FeaturedBroadcast: 'AAATS06',
  NHKPlus: 'AAATS07',
  Archive: 'AAATS08',
  MaterialSets: 'AAATS09',
  TemplateManagement: 'AAATS10',
  PreservedContents: 'AAATS11',
  VideoMemoList: 'AAATS12',
  DeletePublicServerNotRequiredVideo: 'AAATS13',
  MyPage: 'AAATS14',
  SystemsManagement: 'AAATS15',
} as const;

export type ScreenIdType = (typeof ScreenIdType)[keyof typeof ScreenIdType];

export const ScreenIdTypeDisplay = {
  [ScreenIdType.CreateManuscript]: '原稿制作',
  [ScreenIdType.InternetOrder]: 'ネットオーダー',
  [ScreenIdType.ContentForInternet]: 'ネット用コンテンツ',
  [ScreenIdType.Links]: 'リンク集',
  [ScreenIdType.DataBroadcasting]: 'データ放送',
  [ScreenIdType.FeaturedBroadcast]: '特集',
  [ScreenIdType.NHKPlus]: 'NHKプラス',
  [ScreenIdType.Archive]: 'アーカイブ',
  [ScreenIdType.MaterialSets]: '素材セット',
  [ScreenIdType.TemplateManagement]: 'テンプレート管理',
  [ScreenIdType.PreservedContents]: '保存コンテンツ',
  [ScreenIdType.VideoMemoList]: '映像メモ一覧',
  [ScreenIdType.DeletePublicServerNotRequiredVideo]: '公開サーバー不要動画削除',
  [ScreenIdType.MyPage]: 'マイページ',
  [ScreenIdType.SystemsManagement]: 'システム管理',
} as const;

export const parseScreenIdType = (type: string): ScreenIdType => {
  if (type in ScreenIdType) {
    return type as ScreenIdType;
  }
  throw new Error('Invalid ScreenIdType');
};
