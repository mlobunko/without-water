import React from 'react';
import { Alert } from 'reactstrap';
import Loader from 'shared/fetching/components/Loader';
import UserImage from '../UserImage';
import Social from '../social/components';
import City from '../city/components';
import Languages from '../languages/components';

export const ProfileComponent = ({
  fetching,
  isError,
  serverError,
  loginError
}) => (
  <React.Fragment>
    {fetching ? (
      <div className="container-vertical-60vh">
        <Loader />
      </div>
    ) : !isError ? (
      <div className="container-max-width profile">
        <UserImage />
        <City />
        <Languages />
        <Social />
      </div>
    ) : (
      <div className="container-vertical-60vh">
        <Alert color="danger">{serverError || loginError}</Alert>
      </div>
    )}
  </React.Fragment>
);
