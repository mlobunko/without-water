import React from 'react';

export const LanguagesComponent = ({ languages }) => (
  <div>
    <span>
      <i className="fas fa-globe" />
      {languages.map((language, i) => (
        <span key={i}> {language} </span>
      ))}
    </span>
  </div>
);
