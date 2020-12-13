import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoutesEnum } from '../../ROUTES';
import { StyledIconLink, StyledIconLinkOverlay, StyledLandingIconsColumn, StyledIconLinkName, StyledLinkInitial } from '../styles';
import { IIconStates } from '../types';
import { icons } from './icons';

interface IIconLinkWrapProps {
  color: string;
  url: string;
  iconStates: IIconStates;
  name: string;
  active: boolean;
}

const Sidebar = ():JSX.Element => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path: string) => path === currentPath;
  
  return (
    <StyledLandingIconsColumn className="d-flex flex-column">
      <IconLinkWrap
        active={isActive('/bio')}
        iconStates={icons.profile}
        url={AppRoutesEnum.BIO}
        name="BIO" color="red"
      />
      <IconLinkWrap
        active={isActive('/contact')}
        iconStates={icons.mail}
        url={AppRoutesEnum.CONTACT}
        name="CONTACT" color="purple"
      />
      <IconLinkWrap
        active={isActive('/work')}
        iconStates={icons.work}
        url={AppRoutesEnum.WORK}
        name="WORK" color="yellow"
      />
      <IconLinkWrap
        active={isActive('/testimonials')}
        iconStates={icons.testimonials}
        url={AppRoutesEnum.TESTIMONIALS}
        name="TESTIMONIALS" color="blue"
      />
      <IconLinkWrap
        active={isActive('/budget')}
        iconStates={icons.budget}
        url={AppRoutesEnum.BUDGET}
        name="BUDGET" color="green"
      />
    </StyledLandingIconsColumn>
  );
};

const IconLinkWrap = ({ iconStates, color, url, name, active }: IIconLinkWrapProps): JSX.Element => {
  const [hovered, setHovered] = useState<boolean>(false);
  const initial = name.split('').shift();
  const nameRoot = name.split("").splice(1, name.length).join('');

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
          <div className="w-100 d-flex">
            <StyledLinkInitial>{initial}</StyledLinkInitial>
            <StyledIconLinkName>{nameRoot}</StyledIconLinkName>
          </div>
        )}
      </StyledIconLinkOverlay>
      <FontAwesomeIcon icon={hovered || active ? iconStates?.hover : iconStates?.static} />
    </StyledIconLink>
  );
};

export default Sidebar;