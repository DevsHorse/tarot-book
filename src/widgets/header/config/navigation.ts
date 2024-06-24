import { routes } from '@/shared/const/routes';

export const allNavigationItems = [
  {
    name: 'Home',
    path: routes.getMain(),
  },
  {
    name: 'Advisors',
    path: routes.getMain(),
  },
  {
    name: 'Chats',
    path: routes.getMain(),
  },
  {
    name: 'Articles',
    path: routes.getMain(),
  },
  {
    name: 'Horoscope',
    path: routes.getMain(),
  },
  {
    name: 'Tarot',
    path: routes.getTarot(),
  },
];

export const desktopNavigationItems = allNavigationItems.slice(1);
