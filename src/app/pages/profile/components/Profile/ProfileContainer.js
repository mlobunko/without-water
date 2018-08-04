import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import error from 'shared/error';
import { ProfileComponent } from './ProfileComponent';

export class ProfileContainer extends React.Component {
  componentDidMount = () => {
    this.props.errorActionsSetNull();
    if (!this.props.city) {
      this.props.fetchProfile();
    }
  };
  render() {
    return (
      <ProfileComponent
        fetching={this.props.fetching}
        isError={this.props.isError}
        languages={this.props.languages}
        serverError={this.props.serverError}
        loginError={this.props.loginError}
      />
    );
  }
}

const mapStateToProps = state => ({
  city: state.profile.city,
  fetching: state.fetching,
  isError: state.error.isError,
  languages: state.profile.languages,
  serverError: state.error.serverError,
  loginError: state.error.loginError
});

const madDispatchToProps = {
  fetchProfile: actions.fetch,
  errorActionsSetNull: error.actions.setNull
};

export default connect(
  mapStateToProps,
  madDispatchToProps
)(ProfileContainer);
