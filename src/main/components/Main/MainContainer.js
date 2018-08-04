import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { MainComponent } from './MainComponent';

export class MainContainer extends React.Component {
  render() {
    return <MainComponent authorized={this.props.authorized} />;
  }
}

const mapStateToProps = state => ({
  authorized: state.authorized
});

export default withRouter(connect(mapStateToProps)(MainContainer));
