import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Welcome from './Welcome';
import { icons, StyledIconLinkName } from '../common';
import { IIconStates } from '../types';
import { StyledIconLinkOverlay, StyledIconLink, StyledLandingMenuWrap, StyledLandingIconsRow } from '../styles';
import { AppRoutesEnum } from '../../ROUTES';

interface IIconLinkWrapProps {
  color: string;
  url: string;
  iconStates: IIconStates;
  name: string;
}

const LandingPage = (): JSX.Element => {
  const [menuVisible, setMenuVisible] = useState<boolean>(true);

  const onSetVisible = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMenuVisible(!menuVisible)
  };
  // 8668208911

  return menuVisible ? (
    <StyledLandingMenuWrap>
      <StyledLandingIconsRow className="d-flex justify-content-between">
        <IconLinkWrap 
          iconStates={icons.profile}
          url={AppRoutesEnum.BIO}
          name="BIO" color="red"
        />
        <IconLinkWrap 
          iconStates={icons.mail}
          url={AppRoutesEnum.CONTACT}
          name="CONTACT" color="purple"
        />
        <IconLinkWrap 
          iconStates={icons.work}
          url={AppRoutesEnum.WORK}
          name="WORK" color="yellow"
        />
      </StyledLandingIconsRow>
      <StyledLandingIconsRow className="d-flex justify-content-between">
        <IconLinkWrap 
          iconStates={icons.testimonials}
          url={AppRoutesEnum.DEV}
          name="DEV" color="blue"
        />
        <IconLinkWrap 
          iconStates={icons.budget}
          url={AppRoutesEnum.DEV}
          name="DEV" color="green"
        />
      </StyledLandingIconsRow>
    </StyledLandingMenuWrap>
  ) : (
      // TODO: this should be a different page/link
      <Welcome handleClick={onSetVisible} />
    )
};

const IconLinkWrap = ({iconStates, color, url, name}: IIconLinkWrapProps): JSX.Element => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <StyledIconLink 
      to={url} 
      className={color} 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <StyledIconLinkOverlay className={color}>
        {hovered && <StyledIconLinkName>{name}</StyledIconLinkName>}
      </StyledIconLinkOverlay>
      <FontAwesomeIcon icon={hovered ? iconStates?.hover : iconStates?.static} />
    </StyledIconLink>
  );
};

export default LandingPage;