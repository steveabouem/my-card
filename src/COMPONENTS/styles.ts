import styled, { keyframes } from 'styled-components';
import { Col, NavLink } from 'react-bootstrap';
import { Field } from 'formik';

interface IStyledIconLinkProps {
  active: boolean;
}

interface ISyledSlidingTextProps {
  opacityDuration?: string;
  duration?: string;
  offset?: string;
}

const reveal = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const slideText = keyframes`
  from {
    transform: translateX(0);
    opacity: 0;
  }
`;

const slideOut = keyframes`
  from {
    color: white;
  }
  
  to {
    transform: translateX(100%);
    color: #4a72ad;
  }
`;

export const StyledIconLink = styled(NavLink)<IStyledIconLinkProps>`
  border-radius: 8px;
  height: 30px;
  width: 40px;
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
        color: white;
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
  &.dark {
    background: #2b3067e3;
    svg {
      color: #cef4ff;
    }
  }
  &&& {
    svg {
      z-index: 2;
      font-size: 25px;
      transition: .4s;
      ${(props) => props.active ? 'color: white' : null};
    }
  }
`;

export const StyledIconLinkOverlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: 5px;
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
  min-height: calc(100%);
  height: calc(100%);
  width: 50px;
  padding: 15px 5px;
  position: absolute;
  background: #00000005;
  left: 0;
  border-right: 1px solid #8080801c;
  top: 0;
  z-index: 11;
`;

export const StyledLandingMenuWrap = styled.div`
  width: 500px;
  max-width: 500px;
  margin: auto;
`;

export const StyledIconLinkName = styled.span`
  z-index: 1;
  font-size: 15px;
  vertical-align: ;
  align-items: center;
  color: white;
  font-weight: bolder;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  width: 40px;
  animation: ${slideOut} .5s linear;
  animation-fill-mode: forwards;
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

export const StyledSlidingText = styled.div<ISyledSlidingTextProps>`
  font-size: 30px;
  font-weight: 300;
  transform: translateX(${(props) => props.offset ? props.offset : '0'});
  animation: ${slideText} ${(props) => props.duration ? props.duration : '.7s'} linear;
`;

export const StyledFormWrapper = styled.div`
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledField = styled(Field)`
  width: 50%;
  height: 60px;
  border: 1.5px solid #4f505d;
  border-radius: 5px;
  padding: 5px;
  margin: 15px auto;
  &.message {
    height: 250px;
  }
`;

export const StyledButton = styled.button`
  position: absolute;
  width: 50%;
  left: 25%;
  height: 50px;
  background: #404575;
  color: #cef4ff;
  font-size: 19px;
  font-weight: 600;
`;

export const StyledButtonOverlay = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  .static, .hovered {
    height: 50px;
    width: 50%;
    margin: auto;
    z-index: 2;
    text-align: center;
    font-size: 20px;
  }
  
  .hovered {
    transform: translateY(100%);
    color: white;
  }

  &:hover {
    .static {
      .static {
        transform: translateY(-100%);
      }
      .hovered {
        transform: translateY(-100%);
      }
    }
  }
  
`;
