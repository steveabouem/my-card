import styled from 'styled-components';
import { NavLink, Row } from 'react-bootstrap';

export const StyledIconLink = styled(NavLink)`
  border-radius: 15px;
  height: 75px;
  width: 95px;
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
    transform: translateY(-3px);
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
      color: #ffbc00;
    }
  }
  &.purple {
    background: #8c1bce;
    svg {
      color: #fb1dff;
    }
  }
  &.green {
    background: #1c7d1c;
    svg {
      color: #1ae46be0;
    }
  }
`;

export const StyledIconLinkOverlay = styled.div`
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
    background: linear-gradient(180deg,#00863c45,#15fff4a6);
  }
  &.blue {
    background: linear-gradient(180deg,#0095ff52,#f1ff156e);
  }
`;

export const StyledLandingIconsRow = styled(Row)`
  max-height: 80px;
  height: 80px;
`;

export const StyledLandingMenuWrap = styled.div`
  width: 500px;
  max-width: 500px;
  margin: auto;
`;

// TODO: this might be a good idea to display on hover, the underline and text color might be nice in specific colors
export const StyledLinkInitial = styled.div`
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

export const StyledIconLinkName = styled.span`
  color: white;
  font-weight: bolder;
  text-align: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 100%;
`;