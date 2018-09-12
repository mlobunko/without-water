import React from 'react';
import PropTypes from 'prop-types';

import Alert from 'shared/error/components/Alert';
import Loader from 'shared/fetching/components/Loader';
import HeaderH1 from 'app/header/components/HeaderH1';

import Articles from '../Articles';
import { StyledNewsComponent } from './styles';

export const NewsComponent = ({ fetching, isError, news, serverError }) => (
  <StyledNewsComponent>
    <div>
      <HeaderH1 text={'News'} />
    </div>
    {!news.length && fetching ? (
      <Loader centerPage />
    ) : !isError ? (
      <Articles />
    ) : (
      <Alert color="danger" textError={serverError} centerPage />
    )}
  </StyledNewsComponent>
);
NewsComponent.displayName = 'NewsComponent';

export default NewsComponent;

NewsComponent.propTypes = {
  fetching: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  news: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  serverError: PropTypes.string
};
