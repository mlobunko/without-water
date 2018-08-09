import { connect } from 'react-redux';

import { getCity } from '../../../selectors';
import CityComponent from './CityComponent';

const mapStateToProps = state => ({
  city: getCity(state)
});

export default connect(mapStateToProps)(CityComponent);
