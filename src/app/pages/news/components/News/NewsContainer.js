import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../actions';
import { getAll } from '../../selectors';
import NewsComponent from './NewsComponent';

import error from 'shared/error';
import fetching from 'shared/fetching';

export class NewsContainer extends React.Component {
  componentDidMount = () => {
    this.props.errorActionsSetNull();
    if (!this.props.news.length && !this.props.fetching) {
      this.props.actionsFetch();
    }
  };

  render() {
    return (
      <NewsComponent
        fetching={this.props.fetching}
        isError={this.props.errorState.isError}
        serverError={this.props.errorState.serverError}
      />
    );
  }
}

const mapStateToProps = state => ({
  fetching: fetching.selectors.getAll(state),
  errorState: error.selectors.getAll(state),
  news: getAll(state)
});

const mapDispatchToProps = {
  actionsFetch: actions.fetch,
  errorActionsSetNull: error.actions.setNull
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsContainer);

NewsContainer.propTypes = {
  fetching: PropTypes.bool,
  errorState: PropTypes.object,
  news: PropTypes.array
};
