import { connect } from 'react-redux';
import { SocialComponent } from './SocialComponent';
import * as constants from '../../constants';

const mapStateToProps = state => ({
  social: state.profile.social,
  fontClassLibraryIcons: constants.FONT_CLASS_LIBRARY_ICONS
});

export default connect(mapStateToProps)(SocialComponent);
