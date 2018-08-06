import React from 'react';
import { Alert } from 'reactstrap';
import { errorMessage } from '../constants';

export const NotFound = () => (
  <div className="container-vertical-60vh">
    <Alert color="danger">{errorMessage}</Alert>
  </div>
);

export default NotFound;
