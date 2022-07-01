import React from 'react';
import '../../UTILS/i18n/config';
import { useTranslation } from 'react-i18next';
import { StyledSlidingText } from '../styles';
import { StyledCenteredSection } from '../common';
import {faCheckSquare} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import svgLogo from '../../ASSETS/serenity_logo.svg';

const LandingPage = (): JSX.Element => {
    const { t } = useTranslation(['ns2']);

    return (
    <StyledCenteredSection className="d-flex">
      <div className="d-flex flex-column w-100 h-100">
        <StyledSlidingText duration=".5s" offset="10vw">
            <FontAwesomeIcon icon={faCheckSquare} />
            <p>{t('ns2:greetings_1')}</p>
        </StyledSlidingText>
        <StyledSlidingText duration=".7s" offset="11vw">
            <FontAwesomeIcon icon={faCheckSquare} />
            <p>{t('ns2:greetings_2')}</p>
        </StyledSlidingText>
        <div className="d-flex">
          <StyledSlidingText duration="1.5s" offset="11.2vw" opacityDuration="4s">
            <FontAwesomeIcon icon={faCheckSquare} />
            <p>
              {t('ns2:greetings_3')}
            </p>
          </StyledSlidingText><StyledSlidingText duration="1.5s" offset="11.5vw">.</StyledSlidingText>
        </div>
      </div>
    </StyledCenteredSection>
  );
};

export default LandingPage;