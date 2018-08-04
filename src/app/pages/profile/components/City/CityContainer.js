import { connect } from 'react-redux';
import { CityComponent } from './CityComponent';

const mapStateToProps = state => ({
  city: state.profile.city
});

export default connect(mapStateToProps)(CityComponent);
