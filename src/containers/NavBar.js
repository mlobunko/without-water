import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logOut } from "../redux/actions/loginLogoutActions";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export class NavBar extends React.Component {
  state = {
    isOpen: false
  };

  handleAddRemoveEventListener = () => {
    if (this.state.isOpen) {
      document.addEventListener("click", this.handleDocumentClick);
    } else {
      document.removeEventListener("click", this.handleDocumentClick);
    }
  };

  toggle = () => {
    this.setState(
      {
        isOpen: !this.state.isOpen
      },
      this.handleAddRemoveEventListener
    );
  };

  handleDocumentClick = e => {
    const container = this.element;
    if (e.target !== container && !container.contains(e.target)) {
      this.toggle();
    }
  };

  componentWillUnmount = () => {
    document.removeEventListener("click", this.handleDocumentClick);
  };

  render() {
    return (
      <div ref={element => (this.element = element)}>
        <Navbar color="dark" dark expand="md">
          <LinkContainer to="/">
            <NavbarBrand className="mr-auto">
              <div className="nav-bar__logo" />
            </NavbarBrand>
          </LinkContainer>
          <NavbarToggler onClick={this.toggle} className="mr-2" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <LinkContainer to="/news" activeClassName="active">
                <NavItem>
                  <NavLink className="nav-bar__link">News</NavLink>
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/profile" activeClassName="active">
                <NavItem>
                  <NavLink className="nav-bar__link">Profile</NavLink>
                </NavItem>
              </LinkContainer>
              {this.props.authenticated ? (
                <LinkContainer exact to="/">
                  <NavItem onClick={this.props.logOut}>
                    <NavLink className="nav-bar__link">Log out</NavLink>
                  </NavItem>
                </LinkContainer>
              ) : (
                <LinkContainer to="/login" activeClassName="active">
                  <NavItem>
                    <NavLink className="nav-bar__link">Log in</NavLink>
                  </NavItem>
                </LinkContainer>
              )}
            </Nav>
          </Collapse>
        </Navbar>
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
    { logOut }
  )(NavBar)
);
