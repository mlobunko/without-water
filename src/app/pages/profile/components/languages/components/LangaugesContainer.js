import { connect } from 'react-redux';

import { getLanguages } from '../../../selectors';
import { LanguagesComponent } from './LanguagesComponent';

const mapStateToProps = state => ({ languages: getLanguages(state) });

export default connect(mapStateToProps)(LanguagesComponent);
