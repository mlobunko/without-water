import React from 'react';
import Alert from 'shared/error/components/Alert';
import { errorMessage } from '../constants';

export const NotFound = () => (
  <Alert color="danger" textError={errorMessage} centerPage />
);

export default NotFound;
