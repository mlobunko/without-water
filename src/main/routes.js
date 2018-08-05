import LogIn from 'app/pages/logIn/components/LogIn';
import News from 'app/pages/news/components/News';
import NotFound from 'app/pages/notFound/components';
import Profile from 'app/pages/profile/components/Profile';

export const Routes = [
  {
    path: '/',
    isRedirect: true,
    redirectTo: '/news',
    exact: true
  },
  {
    path: '/login',
    component: LogIn
  },
  {
    path: '/news',
    component: News
  },
  {
    path: '/profile',
    component: Profile,
    isPrivate: true
  },
  {
    component: NotFound
  }
];

export default Routes;
