import { connect } from 'react-redux';
import { LanguagesComponent } from './LanguagesComponent';

const mapStateToProps = state => ({ languages: state.profile.languages });

export default connect(mapStateToProps)(LanguagesComponent);
