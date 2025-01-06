import { http, HttpResponse } from 'msw';

// false: 正常時用, true: エラー時用
const isShouldFail = false;

export const handlers = [
  http.get('https://api.example.com/users', () => {
    if (isShouldFail) {
      return HttpResponse.json(
        { error: 'Internal Server Error' },
        {
          status: 500,
          statusText: 'Internal Server Error',
        },
      );
    }

    return HttpResponse.json(
      [
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
      ],
      {
        status: 200,
        statusText: 'OK',
      },
    );
  }),
];
