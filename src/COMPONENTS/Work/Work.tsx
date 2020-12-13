import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import dog from '../../ASSETS/dog.jpg';

interface IStyledBgOverlayProps {
  color?: string;
}

const StyledDescriptionSection= styled.div`
  max-height: 200px;
  height: 200px;
  background-size: cover;
`;

const StyledBgOverlay = styled.div<IStyledBgOverlayProps>`
  position: absolute;
  width: 100%;
  height: 0;
  background: ${props => props.color || 'black'};
  transition: .3s;
  bottom: 0;
  text-align: center;
  font-size: 2rem;
`;

const StyledNavLink = styled(NavLink)`
  padding: 0;
  max-height: 200px;
  width: 350px;
  max-width: 350px;
  color: white;
  text-decoratioin: none;
  overflow: hidden;

  &:hover, &:focus, &:active, &:visited {
    color: white;
    text-decoration: none;
    .bg-overlay {
      height: 45%;
    }
  }
`;

const Work = (): JSX.Element => {
  return (
    <div>
      <Row className="d-flex justify-content-between">
        <StyledNavLink to="">
          <Col className="px-0">
            <StyledBgOverlay  className="bg-overlay" color="#fc6557">RAR</StyledBgOverlay>
            <StyledDescriptionSection style={{backgroundImage: `url(${dog})`}}>Description</StyledDescriptionSection>
          </Col>
        </StyledNavLink>
        <StyledNavLink to="">
          <Col className="px-0">
            <StyledBgOverlay  className="bg-overlay" color="#b24876">Ou-T</StyledBgOverlay>
            <StyledDescriptionSection style={{backgroundImage: `url(${dog})`}}>Description</StyledDescriptionSection>
          </Col>
        </StyledNavLink>
        <StyledNavLink to="">
          <Col className="px-0">
            <StyledBgOverlay  className="bg-overlay" color="#f6b41e">SENELOUER</StyledBgOverlay>
            <StyledDescriptionSection style={{backgroundImage: `url(${dog})`}}>Description</StyledDescriptionSection>
          </Col>
        </StyledNavLink>
      </Row>
    </div>
  );
};

export default Work;