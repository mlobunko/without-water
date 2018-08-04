import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute';
import Header from 'app/Header';
import LogIn from 'app/pages/logIn/components/LogIn';
import News from 'app/pages/news/components/News';
import NotFound from 'app/pages/notFound/components';
import Profile from 'app/pages/profile/components/Profile';

export const MainComponent = ({ authorized }) => (
  <div className="container-main">
    <Header />
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/news" />} />
      <Route path="/login" component={LogIn} />
      <Route path="/news" component={News} />
      <PrivateRoute
        authorized={authorized}
        path="/profile"
        component={Profile}
      />
      <Route render={() => <NotFound />} />
    </Switch>
  </div>
);
