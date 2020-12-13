import styled from 'styled-components';
import { Col, NavLink } from 'react-bootstrap';

interface IStyledIconLinkProps {
  active: boolean;
}

export const StyledIconLink = styled(NavLink)<IStyledIconLinkProps>`
  border-radius: 15px;
  height: 60px;
  width: 60px;
  margin-bottom: 10px;
  border: 1.5px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: relative;
  transition: .3s;

  &:hover {
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

  &&& {
    svg {
      font-size: 45px;
      transition: .4s;
      ${(props) => props.active ? 'color: black' : null};
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

export const StyledLandingIconsColumn = styled(Col)`
  min-height: calc(100% - 20px);
  height: calc(100% - 20px);
  width: 80px;
  position: absolute;
  left: 0;
  top: 20px;
  z-index: 11;
`;

export const StyledLandingMenuWrap = styled.div`
  width: 500px;
  max-width: 500px;
  margin: auto;
`;

export const StyledIconLinkName = styled.span`
  vertical-align: ;
  align-items: center;
  color: white;
  font-weight: bolder;
  text-align: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: flex-start;
  width: 90px;
`;

export const StyledLinkInitial = styled.div`
  color: #ffffff94;
  font-weight: bolder;
  font-size: 1.5rem;
  min-width: 60px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
`;