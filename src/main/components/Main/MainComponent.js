import React from 'react';
import { Switch } from 'react-router-dom';

import Header from 'app/Header';
import routes from '../../routes';
import RouteWithSubRoutes from '../RouteWithSubRoutes';

export const MainComponent = ({ authorized }) => (
  <div className="container-main">
    <Header />
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes authorized={authorized} key={i} {...route} />
      ))}
    </Switch>
  </div>
);
