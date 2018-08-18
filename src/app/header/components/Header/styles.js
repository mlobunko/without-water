import styled from 'styled-components';
import { NavbarBrand, NavLink } from 'reactstrap';
import imageSieve from '../../images/sieve.svg';

export const StyledNavbarBrand = styled(NavbarBrand)`
  background: url(${imageSieve}) no-repeat center center;
  background-size: contain;
  height: 2.5rem;
  width: 2.5rem;
`;

export const StyledNavLink = styled(NavLink)`
  &:hover {
    cursor: pointer;
  }
`;
