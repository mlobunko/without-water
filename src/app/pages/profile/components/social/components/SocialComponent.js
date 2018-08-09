import React from 'react';
import PropTypes from 'prop-types';

import { StyledSocialComponent } from './styles';
import Header from './Header';

export const SocialComponent = ({ social, getIconByName }) => (
  <React.Fragment>
    <Header text={'Social'} />
    <StyledSocialComponent>
      {social.map((el, id) => (
        <div key={id}>
          <a
            href={el.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={el.label}
          >
            {getIconByName(el.label)}
          </a>
        </div>
      ))}
    </StyledSocialComponent>
  </React.Fragment>
);

export default SocialComponent;

SocialComponent.propTypes = {
  social: PropTypes.array.isRequired,
  getIconByName: PropTypes.func.isRequired
};
