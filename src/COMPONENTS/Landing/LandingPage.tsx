import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Welcome from './Welcome';
import { icons } from '../common';
import { NavLink } from 'react-router-dom';
import AppRoutes from '../../App';
import { AppRoutesEnum } from '../../ROUTES';

const StyledIconLink = styled(NavLink)`
  border-radius: 15px;
  height: 60px;
  width: 75px;
  border: 1.5px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: relative;
  transition: .3s;

  svg {
    font-size: 45px;
    transition: .4s;
  }

  &:hover {
    transform: translateY(-5px);
    &&& {
      svg {
        color: black;
      }
    }
  }
  &.red {
    background: #ff5c5c;
    svg {
      color: #ffb6b6;
    }
  }
  &.blue {
    background: #33a1ff;
    svg {
      color: #fffdedbf;
    }
  }
  &.yellow {
    background: #f3f024;
    svg {
      color: #fdfcb9;
    }
  }
  &.purple {
    background: #8c1bce;
    svg {
      color: #fb1dff;
    }
  }
  &.green {
    svg {
      background: linear-gradient(180deg,#ffe0009e,#9fffd3a6);
    }
  }
`;

const StyledIconLinkOverlay = styled.span`
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 15px;
    &.red {
        background: linear-gradient(180deg, #ff5c5c6b, #ccff0042);
    }
    &.purple, &.bue {
        background: linear-gradient(180deg,#8c1bce45,#e07f07a6);
    }
    &.yellow {
        background: linear-gradient(180deg,#fafe000a,#ff010da3);;
    }
    &.green {
        background: #40caff;
    }
    &.blue {
      background: linear-gradient(180deg,#0095ff52,#f1ff156e);
    }
`;

const StyledLandingIconsRow = styled(Row)`
  max-height: 80px;
  height: 80px;
`;

const StyledLandingMenuWrap = styled.div`
  width: 500px;
  max-width: 500px;
  margin: auto;
`;

// TODO: this might be a good idea to display on hover, the underline and text color might be nice in specific colors
const StyledLinkInitial = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  text-align: center;
  font-size: 52px;
  line-height: 1;
  text-decoration: underline;
  font-weight: 900;
  color: black;
  text-decoration-color: black;
`;


const LandingPage = (): JSX.Element => {
  const [menuVisible, setMenuVisible] = useState<boolean>(true);

  const onSetVisible = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMenuVisible(!menuVisible)
  };
  return menuVisible ? (
    <StyledLandingMenuWrap>
      <StyledLandingIconsRow className="d-flex justify-content-between">
        <StyledIconLink to={AppRoutesEnum.BIO} className="red">
          <StyledIconLinkOverlay className="red" />
          <FontAwesomeIcon icon={icons.profile} />
        </StyledIconLink>
        <StyledIconLink to={AppRoutesEnum.CONTACT} className="purple">
          <StyledIconLinkOverlay className="purple" />
          <FontAwesomeIcon icon={icons.mail} />
        </StyledIconLink>
        <StyledIconLink to={AppRoutesEnum.WORK} className="yellow">
          <StyledIconLinkOverlay className="yellow" />
          <FontAwesomeIcon icon={icons.gallery} />
        </StyledIconLink>
      </StyledLandingIconsRow>
      <StyledLandingIconsRow className="d-flex justify-content-between">
        <StyledIconLink to={AppRoutesEnum.BIO} className="blue">
          <StyledIconLinkOverlay className="blue" />
          <FontAwesomeIcon icon={icons.testimonials} />
        </StyledIconLink>
        <StyledIconLink to={AppRoutesEnum.CONTACT} className="purple">
          <StyledIconLinkOverlay className="purple" />
          <FontAwesomeIcon icon={icons.mail} />
        </StyledIconLink>
        <StyledIconLink to={AppRoutesEnum.WORK} className="yellow">
          <StyledIconLinkOverlay className="yellow" />
          <FontAwesomeIcon icon={icons.gallery} />
        </StyledIconLink>
      </StyledLandingIconsRow>
      <StyledLandingIconsRow className="d-flex justify-content-between">
        <StyledIconLink to={AppRoutesEnum.BIO} className="red">
          <StyledIconLinkOverlay className="red" />
          <FontAwesomeIcon icon={icons.profile} />
        </StyledIconLink>
        <StyledIconLink to={AppRoutesEnum.CONTACT} className="purple">
          <StyledIconLinkOverlay className="purple" />
          <FontAwesomeIcon icon={icons.mail} />
        </StyledIconLink>
        <StyledIconLink to={AppRoutesEnum.WORK} className="yellow">
          <StyledIconLinkOverlay className="yellow" />
          <FontAwesomeIcon icon={icons.gallery} />
        </StyledIconLink>
      </StyledLandingIconsRow>
    </StyledLandingMenuWrap>
  ) : (
      // TODO: this should be a different page/link
      <Welcome handleClick={onSetVisible} />
    )
};

export default LandingPage;