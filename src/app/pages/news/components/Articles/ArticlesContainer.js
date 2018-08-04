import { connect } from 'react-redux';
import { ArticlesComponent } from './ArticlesComponent';

const mapStateToProps = state => ({
  news: state.news
});

export default connect(mapStateToProps)(ArticlesComponent);
