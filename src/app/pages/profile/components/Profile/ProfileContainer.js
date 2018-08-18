import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../actions';
import { getCity } from '../../selectors';
import ProfileComponent from './ProfileComponent';

import error from 'shared/error';
import fetching from 'shared/fetching';

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
        city={this.props.city}
        fetching={this.props.fetching}
        isError={this.props.errorState.isError}
        languages={this.props.languages}
        serverError={this.props.errorState.serverError}
        loginError={this.props.errorState.loginError}
      />
    );
  }
}

const mapStateToProps = state => ({
  city: getCity(state),
  fetching: fetching.selectors.getAll(state),
  errorState: error.selectors.getAll(state)
});

const madDispatchToProps = {
  fetchProfile: actions.fetch,
  errorActionsSetNull: error.actions.setNull
};

export default connect(
  mapStateToProps,
  madDispatchToProps
)(ProfileContainer);

ProfileContainer.propTypes = {
  city: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
  errorState: PropTypes.shape({
    isError: PropTypes.bool.isRequired,
    loginError: PropTypes.string,
    serverError: PropTypes.string
  })
};
