import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import '../../UTILS/i18n/config';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import {
  StyledIconLink,
  StyledIconLinkName,
  StyledIconLinkOverlay,
  StyledLandingIconsColumn,
  StyledSidebarSticker
} from '../styles';
import {IIconStates} from '../types';
import {icons} from './icons';
import {LocaleEnum} from "../../UTILS/i18n/types";

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
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid #002261;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: .5rem 0;
  color: white;
  //needs hover
  @media (max-width: 768px) {
    &&& {
      opacity: 1;
      margin: 0;
      color: #002261;
    }
  }
`;

const Sidebar = ():JSX.Element => {
  const { t } = useTranslation(['ns3']);
  const [activeSections, setActiveSections] = useState<string>(t('ns3:home'));
  const [expanded, setExpanded] = useState<boolean>(false);
  const [stickerOut, setStickerOut] = useState<boolean>(false);
  const [currentLanguage, setCurrentLanguage] = useState<LocaleEnum>(LocaleEnum.EN)

  const isActive = (id: SectionsEnum) => activeSections === id;
  const isEnglish = currentLanguage === LocaleEnum.EN;

  const handleSectionIconClick = (id: SectionsEnum) => {
    const target = document.getElementById(id as string);

    target?.scrollIntoView({behavior: 'smooth'});
    setActiveSections(id);
  };

  const handleLanguageChange = () => {
    const lang = isEnglish ? LocaleEnum.FR : LocaleEnum.EN;
    i18next
        .changeLanguage(lang)
        .then(() => {
          // TODO: need to handle pushing locale to url, and the resulting refresh
          // window.location.assign('/' + lang)
          setCurrentLanguage(lang);
        })
        .catch((e) => {
          console.log(e)
        });
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
      <StyledLandingIconsColumn className="d-flex" expanded={expanded}>
        <IconLinkWrap
          handleClick={() => handleSectionIconClick(t('ns3:home'))}
          active={isActive(SectionsEnum.HOME)}
          isParentActive={expanded}
          iconStates={icons.home}
          name={SectionsEnum.HOME}
          color="dark"
        />
        <IconLinkWrap
          handleClick={() => handleSectionIconClick(t('ns3:bio'))}
          active={isActive(SectionsEnum.BIO)}
          isParentActive={expanded}
          iconStates={icons.profile}
          name={SectionsEnum.BIO}
          color="dark"
        />
        <IconLinkWrap
          handleClick={() => handleSectionIconClick(t('ns3:contact'))}
          active={isActive(SectionsEnum.CONTACT)}
          isParentActive={expanded}
          iconStates={icons.mail}
          name={SectionsEnum.CONTACT}
          color="dark"
        />
        <IconLinkWrap
          handleClick={() => handleSectionIconClick(t('ns3:work'))}
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
          >{isEnglish ? t('ns3:fr') : t('ns3:en')}</StyledLocaleButton>
      </StyledLandingIconsColumn>
    </>
  );
};

const IconLinkWrap = ({ iconStates, color, name, active, handleClick, isParentActive }: IIconLinkWrapProps): JSX.Element => {
  const [hovered, setHovered] = useState<boolean>(false);
  const { t } = useTranslation(['ns3']);

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
          <div className="d-flex icon-link-title">
            <StyledIconLinkName>{t(`ns3:${name.toLowerCase()}`)}</StyledIconLinkName>
          </div>
        )}
      </StyledIconLinkOverlay>
      <FontAwesomeIcon icon={hovered || active ? iconStates?.hover : iconStates?.static} />
    </StyledIconLink>
  );
};

export default Sidebar;