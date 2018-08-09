import React from 'react';

import { IconMapMarketAlt } from '../../../icons';

export const CityComponent = ({ city }) => (
  <div>
    <span>
      {IconMapMarketAlt}
      {` ${city}`}
    </span>
  </div>
);
