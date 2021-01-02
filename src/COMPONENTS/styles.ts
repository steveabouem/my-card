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
  border-radius: 5px;
  height: 30px;
  width: 40px;
  margin-bottom: 10px;
  border: .5px solid white;
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
    &.nightmode {
      background: #553a73e3;
      svg {
        color: #ffd400;
      }
    }
  }
  &&& {
    svg {
      z-index: 2;
      font-size: 25px;
      transition: .3s;
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
  border-right: .5px solid #8080801c;
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
  border: .5px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 70%;
  margin: auto;
`;

export const StyledLoaderWrap = styled.div`
  background: #9a9a9a54;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledField = styled(Field)`
  width: 75%;
  height: 50px;
  border: .5px solid #4f505d;
  border-radius: 5px;
  padding: 5px;
  margin: 15px auto;
  transition: .5s;
  &.message {
    height: 250px;
  }
  &.invalid {
    border-color: #04093c;
    background: #fff70a40;
  }
`;

export const StyledInvalidMessage = styled.div`
  text-align: center;
  margin: auto;
  padding: 5px;
  color: #04093c;
  background: #fff70a;
  border-radius: 5px;
  font-weight: 600;
`;

export const StyledButtonOverlay = styled.div`
  width: 75%;
  height: 60px;
  overflow: hidden;
  cursor: pointer;
  margin: auto;
  border-radius: 5px;
  transition: .3s;
  border: 1px solid;
  z-index: 2;

  &:hover {
    .hovered, .static {
      transform: translateY(-100%);
    }
  }

  &.invalid {
    &&& {
      cursor: not-allowed;
    }
  }

  .static, .hovered {
    min-height: 100%;
    width: 100%;
    margin: auto;
    text-align: center;
    transition: .3s;
    font-size: 20px;
    z-index: 1;
    border-radius: 5px;
    .top {
      width: 30%;
      margin: 0 auto;
      padding-top: 15px;
      z-index: 2;
    }
  }
  
  .hovered {
    background: white;
    color: #414676;
  }

  .static {
    color: white;
    background: #414676;
  }
`;
