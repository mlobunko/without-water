import { connect } from 'react-redux';

import { getAll } from '../../selectors';
import { ArticlesComponent } from './ArticlesComponent';

const mapStateToProps = state => ({
  news: getAll(state)
});

export default connect(mapStateToProps)(ArticlesComponent);
