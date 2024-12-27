interface Permission {
  hasReadable: boolean;
  hasEditable: boolean;
  hasPublishable: boolean;
}

export interface MockUserData {
  id: string;
  name: string;
  permission: Permission;
}
