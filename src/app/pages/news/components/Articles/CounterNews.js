import React from 'react';
import { StyledCounterNews } from './styles';

export const CounterNews = ({ total }) => (
  <StyledCounterNews>
    <span>Total News: {total}</span>
  </StyledCounterNews>
);

export default CounterNews;
