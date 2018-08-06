import { connect } from 'react-redux';

import * as constants from '../../../constants';
import { getSocial } from '../../../selectors';
import { SocialComponent } from './SocialComponent';

const mapStateToProps = state => ({
  social: getSocial(state),
  fontClassLibraryIcons: constants.FONT_CLASS_LIBRARY_ICONS
});

export default connect(mapStateToProps)(SocialComponent);
