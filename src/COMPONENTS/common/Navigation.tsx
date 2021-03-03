import React from 'react';
import { Navbar } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
// import { icons } from '../common';

interface IStyledTopNavbarProps {
  hidden?: boolean;
}

interface INavigationProps {
  children?: React.ReactChild;
}

const StyledTopNavbar = styled(Navbar)`
  background: transparent;
  display: flex;
  justify-content: flex-end;
  &&& {
    color: white;
  }
  height: 70px;
  &.fixed-top {
    &&& {
      z-index: 10;
    }
  }
`;

const Navigation = ({ children }: INavigationProps): JSX.Element => {
  return (
    <StyledTopNavbar fixed="top">
      Welcome
    </StyledTopNavbar>
  );
};

export default Navigation;