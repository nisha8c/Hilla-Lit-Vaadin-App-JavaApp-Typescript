import type { Route } from '@vaadin/router';
import './views/grocery/grocery-view';
import './views/student/student-view';
import './views/main-layout';

export type ViewRoute = Route & {
  title?: string;
  icon?: string;
  children?: ViewRoute[];
};

export const views: ViewRoute[] = [
  // place routes below (more info https://hilla.dev/docs/routing)
  {
    path: '',
    component: 'grocery-view',
    icon: '',
    title: '',
  },
  {
    path: 'grocery',
    component: 'grocery-view',
    icon: 'la la-list-alt',
    title: 'Grocery',
  },
  {
    path: 'student',
    component: 'student-view',
    icon: '',
    title: 'Student',
  },
];
export const routes: ViewRoute[] = [
  {
    path: '',
    component: 'main-layout',
    children: views,
  },
];
