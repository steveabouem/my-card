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

export const StyledCenteredSection = styled.div`
  width: 70%;
  margin: auto;
  padding: 1em;
`;

export const StyledHeader = styled.div`
  font-size: 30px;
  font-weight: 500;
  animation: ${reveal} .5s linear;
  border-bottom: 1px solid #eeeff9;
  overflow: hidden;
`;

export const StyledHeaderText = styled.div`
  width: 30%;
  background: #eeeff9;
  color: #556779;
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
  color: white;
  padding: 70px 275px 0 275px;
  max-height: 100vh;
  min-height: 100vh;
 
  &#HOME {
    color: #1b5381;
    background: rgb(97,107,206);
    background: linear-gradient(0deg, rgba(97,107,206,1) 29%, rgba(255,255,255,1) 100%);
  }
  &#BIO {
    background: rgb(97,107,206);
  }
  &#WORK {
    background: rgb(97,107,206);
    background: linear-gradient(180deg, rgba(97,107,206,1) 29%, rgba(255,255,255,1) 100%);
  }
  &#CONTACT {
    background: white;
  }
  
`;

export const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  height: 30px;
  background: white;
  border-top: 1px solid #eeeff9;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #002261;
  left: 0;
  width: 100%;
  padding: 0 15px;

  div {
    display: flex;
    justify-content: center;
    width: 15%;
    a {
      color: #fc6557f5;
      margin: 0 10px;
      transition: .3s;
      &:hover {
        color: white!important;
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