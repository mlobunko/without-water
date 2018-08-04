import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export const HeaderComponent = ({
  authorized,
  authorizedActionsLogOut,
  isOpen,
  toggle
}) => (
  <Navbar color="dark" dark expand="md">
    <LinkContainer to="/">
      <NavbarBrand className="mr-auto">
        <div className="nav-bar__logo" />
      </NavbarBrand>
    </LinkContainer>
    <NavbarToggler onClick={toggle} className="mr-2" />
    <Collapse isOpen={isOpen} navbar>
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
        {authorized ? (
          <LinkContainer exact to="/">
            <NavItem onClick={authorizedActionsLogOut}>
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
);
