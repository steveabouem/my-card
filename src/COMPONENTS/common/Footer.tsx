import React from 'react';
import { NavLink } from 'react-bootstrap';
import { StyledFooter } from './styles';

const Footer = (): JSX.Element => (
  <StyledFooter>
    <div className="text-nowrap">Steve A. ©2021</div>
    <div> 
      <NavLink href=""><i className="fa fa-facebook-square" /></NavLink>
      <NavLink href=""><i className="fa fa-linkedin" /></NavLink>
      <NavLink href=""><i className="fa fa-github" /></NavLink>
    </div>
  </StyledFooter>
);

export default Footer;