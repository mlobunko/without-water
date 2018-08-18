import { REPO_NAME } from './constants';

import LogIn from 'app/pages/logIn/components/LogIn';
import News from 'app/pages/news/components/News';
import NotFound from 'app/pages/notFound/components';
import Profile from 'app/pages/profile/components/Profile';

export const Routes = [
  {
    path: '/',
    isRedirect: true,
    redirectTo: `${REPO_NAME}/news`,
    exact: true
  },
  {
    path: `${REPO_NAME}`,
    isRedirect: true,
    redirectTo: `${REPO_NAME}/news`,
    exact: true
  },
  {
    path: `${REPO_NAME}/login`,
    component: LogIn
  },
  {
    path: `${REPO_NAME}/news`,
    component: News
  },
  {
    path: `${REPO_NAME}/profile`,
    component: Profile,
    isPrivate: true
  },
  {
    component: NotFound
  }
];

export default Routes;
