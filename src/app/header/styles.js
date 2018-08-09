import styled from 'styled-components';
import { NavbarBrand, NavLink } from 'reactstrap';
import imageSieve from './images/sieve.svg';

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

export const StyledHeaderH1 = styled.h1`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;
