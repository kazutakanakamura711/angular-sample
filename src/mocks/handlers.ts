import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://api.example.com/users', () => {
    return HttpResponse.json([
      {
        id: 'ABCDE0',
        name: 'Taro Yamada',
        permission: {
          hasReadable: true,
          hasEditable: true,
          hasPublishable: true,
        },
      },
      {
        id: 'ABCDE1',
        name: 'Hanako Matsuyama',
        permission: {
          hasReadable: true,
          hasEditable: true,
          hasPublishable: false,
        },
      },
      {
        id: 'ABCDE2',
        name: 'Jiro Ehime',
        permission: {
          hasReadable: true,
          hasEditable: false,
          hasPublishable: false,
        },
      },
    ]);
  }),
];
