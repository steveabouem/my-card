import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledIconLink, StyledIconLinkOverlay, StyledLandingIconsColumn, StyledIconLinkName, StyledSidebarSticker } from '../styles';
import { IIconStates } from '../types';
import { icons } from './icons';
import { LocalesEnum } from '../../App';
import styled from 'styled-components';

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
}

const StyledLocaleButton = styled.div<{visible: boolean}>`
  opacity: ${({visible}) => visible? 1 : 0};
  text-alaign: center;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
`;

const Sidebar = ():JSX.Element => {
  const [activeSections, setActiveSections] = useState<SectionsEnum>(SectionsEnum.HOME);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [stickerOut, setStickerOut] = useState<boolean>(false);

  const lang = window.lang;
  // const currentLang = lang.locale === LocalesEnum.EN ? 'EN' : 'FR';

  const isActive = (id: SectionsEnum) => activeSections === id;

  const handleSectionIconClick = (id: SectionsEnum) => {
    const target = document.getElementById(id as string);

    target?.scrollIntoView({behavior: 'smooth'});
    setActiveSections(id);
  };

  const handleLanguageChange = () => {
    window.lang.setLocale(lang.locale === LocalesEnum.EN ? LocalesEnum.FR : LocalesEnum.EN);
  };

  return (
    <>
      <StyledSidebarSticker 
        isSidebarExpanded={expanded}
        isSelfExpanded={stickerOut}
        onClick={() => setExpanded(!expanded)}
        onMouseEnter={() => setStickerOut(true)}
        onMouseLeave={() => setStickerOut(false)}
      >
        <FontAwesomeIcon icon={icons.expand.static} rotate={stickerOut ? 180 : 0} />
      </StyledSidebarSticker>
      <StyledLandingIconsColumn className="d-flex flex-column" expanded={expanded}>
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
          <StyledLocaleButton
            visible={expanded}
            onClick={handleLanguageChange}
          >{lang.get('landing.greetings')}</StyledLocaleButton>
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