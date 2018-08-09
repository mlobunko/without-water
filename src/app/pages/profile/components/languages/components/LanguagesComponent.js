import React from 'react';
import PropTypes from 'prop-types';

import { IconLanguage } from '../../../icons';

export const LanguagesComponent = ({ languages }) => (
  <div>
    <span>
      {IconLanguage}
      {languages.map((language, i) => (
        <span key={i}> {language} </span>
      ))}
    </span>
  </div>
);

export default LanguagesComponent;

LanguagesComponent.propTypes = {
  languages: PropTypes.array.isRequired
};
