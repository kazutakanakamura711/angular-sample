import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://api.example.com/user', () => {
    return HttpResponse.json({
      id: 'ABCDE0',
      name: 'Taro Yamada',
      isPermission: true,
    });
  }),
];
