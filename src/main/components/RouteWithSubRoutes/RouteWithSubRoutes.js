import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute';

export const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props =>
      route.isRedirect ? (
        <Redirect to={route.redirectTo} />
      ) : route.isPrivate ? (
        <PrivateRoute
          {...props}
          authorized={route.authorized}
          component={route.component}
          routes={route.routes}
        />
      ) : (
        <route.component {...props} routes={route.routes} />
      )
    }
  />
);

export default RouteWithSubRoutes;
