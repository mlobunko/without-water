import React from 'react';
import { StyledImage, StyledLoader } from './styles';

export const Loader = ({ centerPage, login }) => (
  <StyledLoader centerPage={centerPage}>
    <StyledImage login={login} />
  </StyledLoader>
);

export default Loader;
