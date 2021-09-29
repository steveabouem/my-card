import styled, { keyframes } from 'styled-components';
import {Row} from 'react-bootstrap';
import { Field } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IStyledIconLinkProps {
  active: boolean;
}

interface IStyledSlidingTextProps {
  opacityDuration?: string;
  duration?: string;
  offset?: string;
}

interface IStyledBgOverlayProps {
  color?: string;
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
    transform: translateY(130%);
    color: #4a72ad;
  }
`;

const slideUp = keyframes`
  from {
    height: 0;
  }

  to {
    height: 100%;
  }
`;

export const StyledPaddedContentWrap = styled.div`
  z-index: 1;
  margin: auto;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const StyledContactDesc = styled.div`
  color: #1b5381;
`;

export const StyledPreviewImage = styled.div`
  max-height: 200px;
  height: 200px;
  background-size: cover;
`;

export const StyledBgOverlay = styled.div<IStyledBgOverlayProps>`
  cursor: pointer;
  position: absolute;
  width: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  background: ${props => props.color || 'black'};
  color: #ecf9fb;
  transition: .3s;
  bottom: 0;
  font-size: 2rem;
  animation: ${slideUp} .7s;
`;

export const StyledIconLink = styled.div<IStyledIconLinkProps>`
  cursor: pointer;
  border-radius: 5px;
  height: 20px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: relative;
  transition: .3s;
  width: 30px;
  &&& {
    svg {
      z-index: 2;
      font-size: 20px;
      transition: .3s;
      ${(props) => props.active ? 'color: white' : null};
    }
  }

  &:hover {
    &&& {
      svg {
        color: white;
      }
    }
  }
  @media (max-width: 768px) {
    &&& {
      height: 30px;
      margin: 0 10px;
      border: .5px solid white;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      position: relative;
      transition: .3s;
      width: 40px;
      svg {
        z-index: 2;
        font-size: 25px;
        transition: .3s;
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
    background: #616bce;
    svg {
      color: #002261;
    }
    &.nightmode {
      background: #616bce;
      svg {
        color: #ffd400;
      }
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

  @media (max-width: 768px) {
    &&&&& {
      .icon-link-title {
        opacity: 0;
      }
    }
  }
`;

export const StyledNavbarWrapper = styled(Row) <{opaque?: string}>`
  opacity: ${({opaque}) => opaque ? '.1' : '1'};
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  width: 100%;
  margin: 0;
  transition: .3s;
  padding: 5px;
  position: fixed;
  background: white;
  left: 0;
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
  align-items: center;
  color: white;
  font-weight: bolder;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  width: 40px;
  animation: ${slideOut} .5s linear;
  animation-fill-mode: forwards;
  margin-left: .5em;
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

export const StyledSlidingText = styled.div<IStyledSlidingTextProps>`
  font-size: 2.5em;
  font-weight: 300;
  transform: translateX(${(props) => props.offset ? props.offset : '0'});
  animation: ${slideText} ${(props) => props.duration ? props.duration : '.7s'} linear;
`;

export const StyledFormWrapper = styled.div`
  padding: 10px 0;
  background: #eeeff9;
  border: .5px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 70%;
  margin: 10px auto;
  
  
  ::-webkit-scrollbar {
    display: none;
  } 
  @media (max-width: 768px) {
    width: 100%;
  }
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

export const StyledLabel = styled.label`
  font-size: 14px;
  width: 75%;
  margin: auto;
  font-weight: 500;
  color: #545454b5;
`;

export const StyledField = styled(Field)`
  width: 75%;
  height: 30px;
  color: #002261;
  border: .5px solid #4f505d;
  border-radius: 5px;
  padding: 5px;
  margin: 10px auto;
  transition: .5s;
  &.message {
    height: 150px;
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
  height: 40px;
  overflow: hidden;
  cursor: pointer;
  margin: auto;
  border-radius: 5px;
  transition: .3s;
  border: 1px solid;

  &:hover {
    .hovered, .static {
      transform: translateY(-100%);
    }
  }

  &.invalid {
    &&& {
      cursor: not-allowed;
      &:hover {
        .hovered, .static {
          transform: none;
        }
      }
    }
  }

  .static, .hovered {
    min-height: 100%;
    width: 100%;
    margin: auto;
    text-align: center;
    transition: .3s;
    font-size: 20px;
    border-radius: 5px;
    .top {
      width: 30%;
      margin: 0 auto;
      z-index: 2;
    }
  }
  
  .hovered {
    background: white;
    color: #616bce;
  }

  .static {
    color: white;
    background: #616bce;
  }
`;

export const StyledModalCurtain = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(74, 72, 45, 0.36);
  position: fixed;
  top: 0;
  left: 0;
`;

export const StyledModalWrap = styled.div`
  position: absolute;
  height: 230px;
  width: 40%;
  background: white;
  top: 40%;
  left: 30%;
  border-top-right-radius: 10px;
  border: 1px solid #002261;
  padding: 1em;
  overflow: hidden;
  z-index: 2;
  @media (max-width: 768px) {
    height: 45%;
    width: 60%;
    top: 30%;
    left: 20%;
  }
`;

export const StyledCloseIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  position: absolute;
  top: 5px;
  left: 5px;
  transition: .3s;
`;

export const StyledLinkBanner = styled.div`
  font-weight: bold;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-shadow: rgba(255,255,255,0.5) 0 1px 0;
  transform: rotate(42deg);
  position: absolute;
  padding: 7px 0;
  right: -67px;
  top: -14px;
  width: 180px;
  background-color: white;
  color: #616bce;
  box-shadow: 0 0 3px rgba(0,0,0,0.3);
  border: 1px solid #474754;
  cursor: pointer;
`;

export const StyledBannerSlider = styled.div`
  position: absolute;
  background: #616bce;
  color: #002261;
  width: 100%;
  top: 0;
  right: 0;
  padding: 7px 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: .3s;
  height: 0;
  opacity: 0;
  &.active {
    opacity: 1;
    height: 100%;
  }
`;

export const StyledModalTitle = styled.div`
  text-align: center;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: #fc6b5e;
  text-decoration-thickness: 3px;
  padding: 5px 0;
  color: #1b5381;
`;

export const StyledModalBody = styled.div`
  max-height: 65%;
  min-height: 65%;
  overflow: auto;
  padding: 5px;
  border-bottom: .2px solid #00226136;
  color: #1b5381;
`;

export const StyledModalBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  white-space: nowrap;
  color: #1b5381;
  img {
    height: 25px;
    padding-left: 10px;
  }
`;

export const StyledContactLayover = styled.div<{ error?: boolean}>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({error}) => error ? '#967676' : '#7e9676'};
  background: ${({error}) => error ? '#ffbd8ef2' : '#d5ffd6f2'};
  font-size: 1.3em;
  transition: .3s;
  animation: ${slideUp} .5s;
  svg {
    animation: ${slideText} 1s;
  }
`;
