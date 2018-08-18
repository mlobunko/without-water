import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { REPO_NAME } from '../../constants';

export const PrivateRoute = ({ component: Component, authorized, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authorized ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: `${REPO_NAME}/login`,
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;

PrivateRoute.propTypes = {
  authorized: PropTypes.bool,
  component: PropTypes.func
};
