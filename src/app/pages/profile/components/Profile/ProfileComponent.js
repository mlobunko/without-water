import React from 'react';
import PropTypes from 'prop-types';

import Alert from 'shared/error/components/Alert';
import Loader from 'shared/fetching/components/Loader';
import UserImage from '../UserImage';
import Social from '../social/components';
import City from '../city/components';
import Languages from '../languages/components';
import { StyledProfileComponent } from '../../styles';

export const ProfileComponent = ({
  city,
  fetching,
  isError,
  loginError,
  serverError
}) => (
  <React.Fragment>
    {!city && fetching ? (
      <Loader centerPage />
    ) : !isError ? (
      <StyledProfileComponent>
        <UserImage />
        <City />
        <Languages />
        <Social />
      </StyledProfileComponent>
    ) : (
      <Alert color="danger" textError={serverError || loginError} centerPage />
    )}
  </React.Fragment>
);

ProfileComponent.displayName = 'ProfileComponent';

export default ProfileComponent;

ProfileComponent.propTypes = {
  city: PropTypes.string,
  fetching: PropTypes.bool.isRequired,
  isError: PropTypes.bool,
  loginError: PropTypes.string,
  serverError: PropTypes.string
};
