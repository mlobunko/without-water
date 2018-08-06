import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { MainComponent } from './MainComponent';
import ErrorBoundary from '../ErrorBoundary';

import authorized from 'shared/authorized';

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
  authorized: authorized.selectors.getAll(state)
});

export default withRouter(connect(mapStateToProps)(MainContainer));
