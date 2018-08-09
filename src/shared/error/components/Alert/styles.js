import styled, { css } from 'styled-components';

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
