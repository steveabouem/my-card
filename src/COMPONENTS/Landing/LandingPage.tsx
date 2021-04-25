import React from 'react';
import '../../UTILS/i18n/config';
import { useTranslation } from 'react-i18next';
import { StyledSlidingText } from '../styles';
// import svgLogo from '../../ASSETS/serenity_logo.svg';

const LandingPage = (): JSX.Element => {
    const { t } = useTranslation(['ns2']);

    return (
    <div className="d-flex">
      <div className="d-flex flex-column">
        <StyledSlidingText duration=".5s" offset="10vw">{t('ns2:greetings_1')}</StyledSlidingText>
        <StyledSlidingText duration=".7s" offset="12vw">{t('ns2:greetings_2')}</StyledSlidingText>
        <div className="d-flex">
          <StyledSlidingText duration="1.5s" offset="11.2vw" opacityDuration="4s">{t('ns2:greetings_3')}</StyledSlidingText><StyledSlidingText duration="1.5s" offset="11.5vw">.</StyledSlidingText>
        </div>
      </div>
      {/*<div style={{ backgroundImage: `url(${svgLogo})`}} />*/}
    </div>
  );
};

export default LandingPage;