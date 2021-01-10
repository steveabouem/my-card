import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoutesEnum } from '../../ROUTES';
import { StyledIconLink, StyledIconLinkOverlay, StyledLandingIconsColumn, StyledIconLinkName } from '../styles';
import { IIconStates } from '../types';
import { icons } from './icons';

interface IIconLinkWrapProps {
  color: string;
  url: string;
  iconStates: IIconStates;
  name: string;
  active?: boolean;
}

const Sidebar = ():JSX.Element => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path: string) => path === currentPath;
  
  return (
    <StyledLandingIconsColumn className="d-flex flex-column">
      {!isActive('/home') && (
        <IconLinkWrap
          iconStates={icons.home}
          url={AppRoutesEnum.LANDING}
          name="HOME" color="dark"
        />
      )}
      <IconLinkWrap
        active={isActive('/bio')}
        iconStates={icons.profile}
        url={AppRoutesEnum.BIO}
        name="BIO" color="dark"
      />
      <IconLinkWrap
        active={isActive('/contact')}
        iconStates={icons.mail}
        url={AppRoutesEnum.CONTACT}
        name="CONTACT" color="dark"
      />
      <IconLinkWrap
        active={isActive('/work')}
        iconStates={icons.work}
        url={AppRoutesEnum.WORK}
        name="WORK" color="dark"
      />
      <IconLinkWrap
        active={isActive('/testimonials')}
        iconStates={icons.testimonials}
        url={AppRoutesEnum.TESTIMONIALS}
        name="FEEDBACK" color="dark"
      />
      <IconLinkWrap
        active={isActive('/budget')}
        iconStates={icons.budget}
        url={AppRoutesEnum.BUDGET}
        name="BUDGET" color="dark"
      />
    </StyledLandingIconsColumn>
  );
};

const IconLinkWrap = ({ iconStates, color, url, name, active }: IIconLinkWrapProps): JSX.Element => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <StyledIconLink
      active={active}
      href={url}
      className={color}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <StyledIconLinkOverlay className={color}>
        {hovered && (
          <div className="d-flex">
            <StyledIconLinkName>{name}</StyledIconLinkName>
          </div>
        )}
      </StyledIconLinkOverlay>
      <FontAwesomeIcon icon={hovered || active ? iconStates?.hover : iconStates?.static} />
    </StyledIconLink>
  );
};

export default Sidebar;