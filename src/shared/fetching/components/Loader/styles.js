import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import imageLoader from '../../images/loader.svg';

export const StyledImage = styled.div`
  background: url(${imageLoader}) no-repeat center center;
  background-size: contain;
  height: 3rem;
  width: 100%;
  margin-bottom: ${props => props.login && '1rem'};
`;
StyledImage.displayName = 'StyledImage';

StyledImage.propTypes = {
  login: PropTypes.bool
};

export const StyledLoader = styled.div`
  ${props =>
    props.centerPage &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 60vh;
    `};
`;
StyledLoader.displayName = 'StyledLoader';

StyledLoader.propTypes = {
  centerPage: PropTypes.bool
};
