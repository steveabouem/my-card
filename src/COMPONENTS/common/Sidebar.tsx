import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { StyledIconLink, StyledIconLinkOverlay, StyledLandingIconsColumn, StyledIconLinkName, StyledSidebarSticker } from '../styles';
import { IIconStates } from '../types';
import { icons } from './icons';

interface IIconLinkWrapProps {
  color: string;
  iconStates: IIconStates;
  name: string;
  active: boolean;
  isParentActive: boolean;
  handleClick: (id: string) => void;
}

export enum  SectionsEnum {
  HOME = 'HOME',
  BIO = 'BIO',
  CONTACT = 'CONTACT',
  WORK = 'WORK',
};

const Sidebar = ():JSX.Element => {
  const [activeSections, setActiveSections] = useState<SectionsEnum>(SectionsEnum.HOME);
  const [expanded, setExpanded] = useState<boolean>(false);

  const isActive = (id: SectionsEnum) => activeSections === id;
  const handleSectionIconClick = (id: SectionsEnum) => {
    
    const target = document.getElementById(id as string);
    target?.scrollIntoView({behavior: 'smooth'});
    setActiveSections(id);
  };

  return (
    <>
      <StyledSidebarSticker 
        isSidebarExpanded={expanded}
        onClick={() => setExpanded(!expanded)}
        style={{ left: `${expanded ? '50px' : '0px'}` }}
      />
      <StyledLandingIconsColumn className="d-flex flex-column" expanded={expanded} style={{width: `${expanded ? '50px' : '0'}`}}>
        <IconLinkWrap
          handleClick={() => handleSectionIconClick(SectionsEnum.HOME)}
          active={isActive(SectionsEnum.HOME)}
          isParentActive={expanded}
          iconStates={icons.home}
          name={SectionsEnum.HOME}
          color="dark"
        />
        <IconLinkWrap
          handleClick={() => handleSectionIconClick(SectionsEnum.BIO)}
          active={isActive(SectionsEnum.BIO)}
          isParentActive={expanded}
          iconStates={icons.profile}
          name={SectionsEnum.BIO}
          color="dark"
        />
        <IconLinkWrap
          handleClick={() => handleSectionIconClick(SectionsEnum.CONTACT)}
          active={isActive(SectionsEnum.CONTACT)}
          isParentActive={expanded}
          iconStates={icons.mail}
          name={SectionsEnum.CONTACT}
          color="dark"
        />
        <IconLinkWrap
          handleClick={() => handleSectionIconClick(SectionsEnum.WORK)}
          active={isActive(SectionsEnum.WORK)}
          isParentActive={expanded}
          iconStates={icons.work}
          name={SectionsEnum.WORK}
          color="dark"
        />
        {/* TODO: consider whether testimonials are relevant on their own, under the given 'work' section, or at all */}
        {/* IF I add the dropdown in Contact, then this is automatically relevant */}
        {/* <IconLinkWrap
          handleClick={()=> handleSectionIconClick()}
          active={isActive('/testimonials')}
          isParentActive={expanded}
          iconStates={icons.testimonials}
          name={SectionsEnum.FEEDBACK}
          color="dark"
        /> */}
        {/* TODO: ditto */}
        {/* <IconLinkWrap
          handleClick={()=> handleSectionIconClick()}
          active={isActive('/budget')}
          isParentActive={expanded}
          iconStates={icons.budget}
          name={SectionsEnum.BUDGET}
          color="dark"
        /> */}
      </StyledLandingIconsColumn>
    </>
  );
};

const IconLinkWrap = ({ iconStates, color, name, active, handleClick, isParentActive }: IIconLinkWrapProps): JSX.Element => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <StyledIconLink
      active={active}
      isParentActive={isParentActive}
      className={color}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => handleClick(name)}
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