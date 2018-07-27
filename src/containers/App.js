import React from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { logIn, logOut, setId } from "../redux/actions/loginLogoutActions";
import { PrivateRoute } from "../components/PrivateRoute";
import NavBar from "./NavBar";
import Login from "./Login";
import Profile from "./Profile";
import News from "./News";
import { PageNotFound } from "../components/PageNotFound";
import { errorLibrary } from "../helpers/errorLibrary";

export class App extends React.Component {
  componentDidMount = () => {
    const authenticated = localStorage.getItem("authenticated");
    if (authenticated === "true") {
      this.props.logIn();
      const id = localStorage.getItem("id");
      this.props.setId(id);
    } else {
      this.props.logOut();
    }
  };
  render() {
    return (
      <div className="container-main">
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/news" />} />
          <Route path="/login" component={Login} />
          <Route path="/news" component={News} />
          <PrivateRoute
            authenticated={this.props.authenticated}
            path="/profile"
            component={Profile}
          />
          <Route
            render={() => (
              <PageNotFound textError={errorLibrary["page_not_found"]} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      logIn,
      logOut,
      setId
    }
  )(App)
);
