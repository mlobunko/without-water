import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { MainComponent } from './MainComponent';
import ErrorBoundary from '../ErrorBoundary';

export class MainContainer extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <MainComponent authorized={this.props.authorized} />
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = state => ({
  authorized: state.authorized
});

export default withRouter(connect(mapStateToProps)(MainContainer));
