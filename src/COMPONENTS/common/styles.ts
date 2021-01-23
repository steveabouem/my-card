import styled, { keyframes } from 'styled-components';
import { IBgCoordinates } from './types';

interface IStyledBaseBgProps {
  bgCoordinates?: IBgCoordinates;
}

let numbers = [];

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

export const StyledHeader = styled.div`
  font-size: 30px;
  font-weight: 500;
  animation: ${reveal} .5s linear;
  border-bottom: 1px solid #616bce12;
  overflow: hidden;
`;

export const StyledHeaderText = styled.div`
  width: 25%;
  background: #616bce;
  color: white;
  border: 1px solid #1c2477;
  border-top-right-radius: 5px;
  border-bottom: none;
  padding: 10px 0 10px 5px;
  transform: translateY(100%);
  text-transform: uppercase;
  transition: .7s;
  &.loaded {
    transform: none;
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
  min-width: calc(100vw - 80px);
  max-width: calc(100vw - 280px);
  padding: 0 100px;
`;