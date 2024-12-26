export interface MockUserData {
  id: string;
  name: string;
  permission: {
    hasReadable: boolean;
    hasEditable: boolean;
    hasPublishable: boolean;
  };
}
