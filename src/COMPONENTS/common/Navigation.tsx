import React from 'react';
import {Navbar} from 'react-bootstrap';
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
    &&& {
        color: white;
    }
    height: 70px;
    // ${(hidden) => hidden && 'display: none;'}
`;

const Navigation = ({children}: INavigationProps): JSX.Element => {
    const params = useParams();
    
    return (
        <StyledTopNavbar fixed="top">  
            Welcome
        </StyledTopNavbar>
    );
};

export default Navigation;