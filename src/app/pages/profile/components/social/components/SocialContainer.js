import { connect } from 'react-redux';

import * as model from '../../../model';
import { getSocialWebFirst } from '../../../selectors';
import SocialComponent from './SocialComponent';

const mapStateToProps = state => ({
  social: getSocialWebFirst(state),
  getIconByName: model.getIconByName
});

export default connect(mapStateToProps)(SocialComponent);
