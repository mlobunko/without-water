import React from 'react';
import PropTypes from 'prop-types';

import { IconMapMarketAlt } from '../../../icons';

export const CityComponent = ({ city }) => (
  <div>
    <span>
      {IconMapMarketAlt}
      {` ${city}`}
    </span>
  </div>
);

export default CityComponent;

CityComponent.propTypes = {
  city: PropTypes.string.isRequired
};
