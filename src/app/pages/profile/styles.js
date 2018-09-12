import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import imageUser from './images/imageUser.svg';

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: rgb(52, 58, 64);
`;

StyledFontAwesomeIcon.displayName = 'StyledFontAwesomeIcon';

export const StyledProfileComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  width: 95vw;
  max-width: 500px;
`;

StyledProfileComponent.displayName = 'StyledProfileComponent';

export const StyledSocialFontAwesomeIcon = styled(FontAwesomeIcon)`
  && {
    color: rgb(52, 58, 64);
    &:hover {
      color: rgb(161, 164, 165);
    }
    &:active {
      color: rgb(161, 164, 165);
    }
  }
`;

StyledSocialFontAwesomeIcon.displayName = 'StyledSocialComponent';

export const StyledUserImage = styled.div`
  background: url(${imageUser}) no-repeat center center;
  background-size: contain;
  height: 7rem;
  width: 100%;
  margin-bottom: 1rem;
`;

StyledUserImage.displayName = 'StyledUserImage';
