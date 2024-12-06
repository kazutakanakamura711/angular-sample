import { AreaCategoryIdType, AreaNameIdType } from '../header/types';
import { NavigationMenuStore } from './navigation-menu.component';
import { ScreenIdType } from './types';

export const mockData: NavigationMenuStore = {
  categoryId: AreaCategoryIdType.Area,
  areaId: AreaNameIdType.Tokyo,
  screenInfo: [
    {
      id: ScreenIdType.ItemsCoveredList,
      permissions: {
        hasReadable: true,
        hasEditable: true,
        hasPublishable: true,
      },
    },
    {
      id: ScreenIdType.ArticleDetails,
      permissions: {
        hasReadable: true,
        hasEditable: true,
        hasPublishable: false,
      },
    },
    {
      id: ScreenIdType.DigitalPublicationItemsList,
      permissions: {
        hasReadable: true,
        hasEditable: false,
        hasPublishable: true,
      },
    },
    {
      id: ScreenIdType.DigitalPublicationItemEdit,
      permissions: {
        hasReadable: false,
        hasEditable: true,
        hasPublishable: true,
      },
    },
    {
      id: ScreenIdType.TelegramList,
      permissions: {
        hasReadable: false,
        hasEditable: false,
        hasPublishable: true,
      },
    },
    {
      id: ScreenIdType.QuickPreview,
      permissions: {
        hasReadable: true,
        hasEditable: false,
        hasPublishable: false,
      },
    },
    {
      id: ScreenIdType.BannedCharacter,
      permissions: {
        hasReadable: false,
        hasEditable: false,
        hasPublishable: false,
      },
    },
  ],
};
