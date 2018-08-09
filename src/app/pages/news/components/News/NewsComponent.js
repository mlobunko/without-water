import React from 'react';

import Alert from 'shared/error/components/Alert';
import Loader from 'shared/fetching/components/Loader';
import HeaderH1 from 'app/header/components/HeaderH1';

import Articles from '../Articles';

export const NewsComponent = ({ fetching, isError, serverError }) => (
  <div className="container-news">
    <div>
      <HeaderH1 text={'News'} />
    </div>
    {fetching ? (
      <Loader centerPage />
    ) : !isError ? (
      <Articles />
    ) : (
      <Alert color="danger" textError={serverError} centerPage />
    )}
  </div>
);
