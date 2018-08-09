import React from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from 'app/header/components/Header';

import { StyledMainComponent } from './styles';
import routes from '../../routes';
import RouteWithSubRoutes from '../RouteWithSubRoutes';

export const MainComponent = ({ authorized }) => (
  <StyledMainComponent>
    <Header />
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes authorized={authorized} key={i} {...route} />
      ))}
    </Switch>
  </StyledMainComponent>
);

export default MainComponent;

MainComponent.propTypes = {
  authorized: PropTypes.bool.isRequired
};
