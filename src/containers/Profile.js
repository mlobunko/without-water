import React from "react";
import { connect } from "react-redux";
import { setErrorsToNull } from "../redux/actions/settingErrorActions";
import { fetchProfile } from "../saga/actions/fetchingActions";
import { Alert } from "reactstrap";
import { Loader } from "../components/Loader";
import { ProfileContent } from "../components/ProfileContent";
import { fontClassLibraryIcons } from "../helpers/fontClassLibraryIcons";

export class Profile extends React.Component {
  componentDidMount = () => {
    this.props.setErrorsToNull();
    if (!this.props.social.length) {
      this.props.fetchProfile();
    } else {
      return;
    }
  };
  componentWillUnmount = () => {
    this.props.setErrorsToNull();
  };
  render() {
    return (
      <React.Fragment>
        {this.props.fetching ? (
          <div className="container-vertical-60vh">
            <Loader />
          </div>
        ) : !this.props.isError ? (
          <ProfileContent
            city={this.props.city}
            languages={this.props.languages}
            social={this.props.social}
            fontClassLibraryIcons={fontClassLibraryIcons}
          />
        ) : (
          <div className="container-vertical-60vh">
            <Alert color="danger">{this.props.serverError}</Alert>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  city: state.user.city,
  languages: state.user.languages,
  social: state.user.social,
  fetching: state.user.fetching,
  isError: state.user.isError,
  serverError: state.user.errors.serverError
});

export default connect(
  mapStateToProps,
  { fetchProfile, setErrorsToNull }
)(Profile);
