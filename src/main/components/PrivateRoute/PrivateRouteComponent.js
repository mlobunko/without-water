import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRouteComponent = ({
  component: Component,
  authorized,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      authorized ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

export default PrivateRouteComponent;