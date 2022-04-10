import styled, { keyframes } from 'styled-components';
import { IBgCoordinates } from './types';

interface IStyledBaseBgProps {
  bgCoordinates?: IBgCoordinates;
}

const numbers = [];

for (let i = 50; i < 400; i++) {
  numbers.push(i)
}

const curtain = keyframes`
  to {
    transform: translateY(${Math.round(Math.random() * numbers.length * -1)}vh) translateX(${Math.round(Math.random() * numbers.length * -1)}px);
  }
`;

const reveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  
  to {
    opacity: 1;
    transform: none;
  }
`;

export const StyledLargeText = styled.div<{height?: string}>`
  font-size: 1.5em;
  height: ${({height}) => height ? height : 'initial'};
`;

export const StyledCenteredSection = styled.div`
  position: absolute;
  height: 100%;
  width: 70%;
  margin: auto;
  padding: 5%;
`;

export const StyledHeader = styled.div`
  font-size: 30px;
  font-weight: 500;
  width: 100%;
  height: 11.9%;
  max-height: 75px;
  animation: ${reveal} .5s linear;
  border-bottom: 2px solid #8cb1dc;
  overflow: hidden;
`;

export const StyledHeaderText = styled.div`
  width: 30%;
  height: calc(100% - 1px);
  background: #14172d;
  color: #eeeff9;
  border-top-right-radius: 5px;
  border-bottom: none;
  padding: 10px 0 10px 5px;
  transform: translateY(100%);
  text-transform: uppercase;
  transition: .7s;
  &.loaded {
    transform: none;
  }

  @media (max-width: 768px) {
    &&& {
      width: 100%;
    }
  }
`;

export const StyledBaseBG = styled.div<IStyledBaseBgProps>`
  z-index: 0;
  height: 500vh;
  min-height: 100vh;
  width: 500vw;
  min-width: 100vw;
  overflow: hidden;
  background-image: url('https://images.unsplash.com/photo-1586775490184-b79f0621891f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  animation-fill-mode: forwards;
  animation: ${curtain} .6s ease;
  background-size: cover;
`;

export const StyledPageContent = styled.div`
  padding: 2% 20% 0 20%;
  max-height: 100vh;
  min-height: 100vh;
  color: #eeeff9;
  background: #1e2140;
  
  //&#HOME {
  //  color: #eeeff9;
  //  background: #1e2140;
  //}
  //&#SERVICES {
  //  background: rgb(97,107,206);
  //}
  //&#WORK {
  //  background: rgb(97,107,206);
  //}
  //&#BIO {
  //  background: rgb(97,107,206);
  //}
  //&#CONTACT {
  //  background: linear-gradient(180deg,rgba(97,107,206,1) 88%,rgba(255,255,255,1) 100%);
  //}
  
`;

export const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  height: 30px;
  background: #ecf9fb;
  border-top: 1px solid #eeeff9;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #002261;
  left: 0;
  width: 100%;
  padding: 0 15px;
  z-index: 3;

  div {
    display: flex;
    justify-content: center;
    width: 15%;
    a {
      color: #fc6557f5;
      margin: 0 10px;
      &:hover {
        color: #ecf9fb!important;
      }
      i {
        font-size: 20px;
      }
    }
  }
`;

export const StyledDarkSectionBG = styled.div`
  background: #1b1d3c;
  color: #cbd0ff;
  width: 100vw;
  height: 100%;
`;