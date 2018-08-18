import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { StyledNavbarBrand, StyledNavLink } from './styles';

export const HeaderComponent = ({
  authorized,
  authorizedActionsLogOut,
  isOpen,
  toggle
}) => (
  <Navbar color="dark" dark expand="md">
    <LinkContainer to="/">
      <StyledNavbarBrand />
    </LinkContainer>
    <NavbarToggler onClick={toggle} className="mr-2" />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="ml-auto" navbar>
        <LinkContainer to="/news" activeClassName="active">
          <NavItem>
            <StyledNavLink>News</StyledNavLink>
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/profile" activeClassName="active">
          <NavItem>
            <StyledNavLink>Profile</StyledNavLink>
          </NavItem>
        </LinkContainer>
        {authorized ? (
          <LinkContainer exact to="/">
            <NavItem onClick={authorizedActionsLogOut}>
              <StyledNavLink>Log out</StyledNavLink>
            </NavItem>
          </LinkContainer>
        ) : (
          <LinkContainer to="/login" activeClassName="active">
            <NavItem>
              <StyledNavLink>Log in</StyledNavLink>
            </NavItem>
          </LinkContainer>
        )}
      </Nav>
    </Collapse>
  </Navbar>
);

export default HeaderComponent;

HeaderComponent.propTypes = {
  authorized: PropTypes.bool.isRequired,
  authorizedActionsLogOut: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};
