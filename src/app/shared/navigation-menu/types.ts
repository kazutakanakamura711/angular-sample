export const ScreenIdType = {
  ItemsCoveredList: 'AAATS01',
  ArticleDetails: 'AAATS02',
  DigitalPublicationItemsList: 'AAATS03',
  DigitalPublicationItemEdit: 'AAATS04',
  TelegramList: 'AAATS05',
  QuickPreview: 'AAATS06',
  BannedCharacter: 'AAATS07',
} as const;

export type ScreenIdType = (typeof ScreenIdType)[keyof typeof ScreenIdType];

export const ScreenIdTypeDisplay = {
  [ScreenIdType.ItemsCoveredList]: '取材項目一覧画面',
  [ScreenIdType.ArticleDetails]: '記事詳細表示画面',
  [ScreenIdType.DigitalPublicationItemsList]: 'デジタル公開項目一覧画面',
  [ScreenIdType.DigitalPublicationItemEdit]: 'デジタル公開項目編集画面',
  [ScreenIdType.TelegramList]: '電文一覧画面',
  [ScreenIdType.QuickPreview]: '簡易一覧画面',
  [ScreenIdType.BannedCharacter]: '使用禁止文字一覧表示画面',
} as const;

export const parseScreenIdType = (type: string): ScreenIdType => {
  if (type in ScreenIdType) {
    return type as ScreenIdType;
  }
  throw new Error('Invalid ScreenIdType');
};
