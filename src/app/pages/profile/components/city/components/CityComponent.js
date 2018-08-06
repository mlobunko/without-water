import React from 'react';

export const CityComponent = ({ city }) => (
  <div>
    <span>
      <i className="fas fa-map-marker-alt" />
      {` ${city}`}
    </span>
  </div>
);
