import React from 'react';
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
