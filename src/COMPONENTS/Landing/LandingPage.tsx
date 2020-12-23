import React from 'react';
import { StyledSlidingText } from '../styles';

const LandingPage = (): JSX.Element => {

  return (
    <div>
      <StyledSlidingText duration=".5s" offset="10vw">Hi there!</StyledSlidingText>
      <StyledSlidingText duration=".7s" offset="12vw">I'm Steve, what you see</StyledSlidingText>
      <div className="d-flex">
        <StyledSlidingText duration="1.5s" offset="11.2vw" opacityDuration="4s">is what I do</StyledSlidingText><StyledSlidingText duration="1.5s" offset="11.5vw">.</StyledSlidingText>
      </div>
    </div>
  );
};

export default LandingPage;