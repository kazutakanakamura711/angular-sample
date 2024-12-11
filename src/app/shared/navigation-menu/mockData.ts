import { AreaCategoryIdType, AreaNameIdType } from '../header/types';
import { NavigationMenuStore } from './navigation-menu.component';
import { ScreenIdType } from './types';

export const mockData: NavigationMenuStore = {
  defaultCategoryId: AreaCategoryIdType.Area,
  defaultAreaId: AreaNameIdType.Tokyo,
  categoryInfo: [
    {
      id: AreaCategoryIdType.All,
      hasPermission: true,
    },
    {
      id: AreaCategoryIdType.Area,
      hasPermission: true,
    },
    {
      id: AreaCategoryIdType.Easy,
      hasPermission: true,
    },
    {
      id: AreaCategoryIdType.International,
      hasPermission: true,
    },
  ],
  screenInfo: [
    {
      id: ScreenIdType.CreateManuscript,
      permissions: {
        hasReadable: true,
        hasEditable: true,
        hasPublishable: true,
      },
    },
    {
      id: ScreenIdType.InternetOrder,
      permissions: {
        hasReadable: true,
        hasEditable: true,
        hasPublishable: false,
      },
    },
    {
      id: ScreenIdType.ContentForInternet,
      permissions: {
        hasReadable: true,
        hasEditable: false,
        hasPublishable: true,
      },
    },
    {
      id: ScreenIdType.Links,
      permissions: {
        hasReadable: false,
        hasEditable: true,
        hasPublishable: true,
      },
    },
    {
      id: ScreenIdType.DataBroadcasting,
      permissions: {
        hasReadable: false,
        hasEditable: false,
        hasPublishable: true,
      },
    },
    {
      id: ScreenIdType.FeaturedBroadcast,
      permissions: {
        hasReadable: true,
        hasEditable: false,
        hasPublishable: false,
      },
    },
    {
      id: ScreenIdType.NHKPlus,
      permissions: {
        hasReadable: true,
        hasEditable: false,
        hasPublishable: false,
      },
    },
    {
      id: ScreenIdType.Archive,
      permissions: {
        hasReadable: true,
        hasEditable: false,
        hasPublishable: false,
      },
    },
    {
      id: ScreenIdType.MaterialSets,
      permissions: {
        hasReadable: true,
        hasEditable: false,
        hasPublishable: false,
      },
    },
    {
      id: ScreenIdType.TemplateManagement,
      permissions: {
        hasReadable: true,
        hasEditable: false,
        hasPublishable: false,
      },
    },
    {
      id: ScreenIdType.PreservedContents,
      permissions: {
        hasReadable: true,
        hasEditable: false,
        hasPublishable: false,
      },
    },
    {
      id: ScreenIdType.VideoMemoList,
      permissions: {
        hasReadable: true,
        hasEditable: false,
        hasPublishable: false,
      },
    },
    {
      id: ScreenIdType.DeletePublicServerNotRequiredVideo,
      permissions: {
        hasReadable: true,
        hasEditable: false,
        hasPublishable: false,
      },
    },
    {
      id: ScreenIdType.MyPage,
      permissions: {
        hasReadable: true,
        hasEditable: false,
        hasPublishable: false,
      },
    },
    {
      id: ScreenIdType.SystemsManagement,
      permissions: {
        hasReadable: false,
        hasEditable: false,
        hasPublishable: false,
      },
    },
  ],
};
