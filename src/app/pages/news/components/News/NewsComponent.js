import React from 'react';
import { Alert } from 'reactstrap';
import Loader from 'shared/fetching/components/Loader';
import Articles from '../Articles';

export const NewsComponent = ({ fetching, isError, serverError }) => (
  <div className="container-news">
    <div>
      <h1>News</h1>
    </div>
    {fetching ? (
      <div className="container-vertical-60vh">
        <Loader />
      </div>
    ) : !isError ? (
      <Articles />
    ) : (
      <div className="container-vertical-60vh">
        <Alert color="danger">{serverError}</Alert>
      </div>
    )}
  </div>
);
