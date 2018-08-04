import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import error from 'shared/error';
import { NewsComponent } from './NewsComponent';

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
        isError={this.props.isError}
        serverError={this.props.serverError}
      />
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.fetching,
  isError: state.isError,
  news: state.news,
  serverError: state.error.serverError
});

const mapDispatchToProps = {
  actionsFetch: actions.fetch,
  errorActionsSetNull: error.actions.setNull
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsContainer);
