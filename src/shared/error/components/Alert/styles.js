import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const AlertStyled = styled.div`
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

AlertStyled.propTypes = {
  centerPage: PropTypes.bool
};
