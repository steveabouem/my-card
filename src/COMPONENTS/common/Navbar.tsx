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
  StyledNavbarWrapper,
} from '../styles';
import {IIconStates} from '../types';
import {icons} from './icons';
import {LocaleEnum} from "../../UTILS/i18n/";

interface IIconLinkWrapProps {
  color: string;
  iconStates: IIconStates;
  name: string;
  active: boolean;
  handleClick: (id: string) => void;
}

export enum  SectionsEnum {
  HOME = 'HOME',
  BIO = 'BIO',
  CONTACT = 'CONTACT',
  WORK = 'WORK',
  SERVICES = 'SERVICES',
  PRICING = 'PRICING'
}

const StyledLocaleButton = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid #002261;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle,rgba(30,33,64,1) 0%,rgba(0,0,0,1) 100%);
  color: white;
  
  &:hover {
    background: white;
    color: black;
  }
`;

const Navbar = ():JSX.Element => {
  const { t } = useTranslation(['ns3', 'ns7']);
  const [activeSections, setActiveSections] = useState<string>(t('ns3:home'));
  const [currentLanguage, setCurrentLanguage] = useState<LocaleEnum>(LocaleEnum.EN)
  // const [isTransparent, setIsTransparent] = useState<boolean>(false);
  // const [offset, setOffset] = useState<number>(window.scrollY);

  const isActive = (id: SectionsEnum) => activeSections === id;
  const isEnglish = currentLanguage === LocaleEnum.EN;

  const handleSectionIconClick = (id: SectionsEnum) => {
    console.log(id)
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
        // .catch((e) => {
        //
        // });
  };

  // const handleContainerScroll = useCallback(() => {
  //   setIsTransparent(offset < window.scrollY);
  // }, [offset]);


  // useEffect(() => {
  //   setOffset(window.scrollY);
  //   window.addEventListener("scroll", handleContainerScroll);
  //
  //   return () => {
  //     window.removeEventListener("scroll", handleContainerScroll);
  //   };
  // }, [handleContainerScroll]);

  return (
    <>
      <StyledNavbarWrapper
        className="d-flex"
        // opaque={isTransparent}
      >
        <IconLinkWrap
          handleClick={() => handleSectionIconClick(t('ns3:home'))}
          active={isActive(SectionsEnum.HOME)}

          iconStates={icons.home}
          name={SectionsEnum.HOME}
          color="dark"
        />
        <IconLinkWrap
            handleClick={() => handleSectionIconClick(t('ns3:services'))}
            active={isActive(SectionsEnum.SERVICES)}

            iconStates={icons.bell}
            name={SectionsEnum.SERVICES}
            color="dark"
        />
        <IconLinkWrap
            handleClick={()=> handleSectionIconClick(t('ns3:pricing'))}
            active={isActive(SectionsEnum.PRICING)}

            iconStates={icons.budget}
            name={SectionsEnum.PRICING}
            color="dark"
        />
        <IconLinkWrap
            handleClick={() => handleSectionIconClick(t('ns3:work'))}
            active={isActive(SectionsEnum.WORK)}

            iconStates={icons.work}
            name={SectionsEnum.WORK}
            color="dark"
        />
        <IconLinkWrap
            handleClick={() => handleSectionIconClick(t('ns3:bio'))}
            active={isActive(SectionsEnum.BIO)}

            iconStates={icons.profile}
            name={SectionsEnum.BIO}
            color="dark"
        />
        <IconLinkWrap
          handleClick={() => handleSectionIconClick(t('ns3:contact'))}
          active={isActive(SectionsEnum.CONTACT)}

          iconStates={icons.mail}
          name={SectionsEnum.CONTACT}
          color="dark"
        />
        {/* TODO: consider whether testimonials are relevant on their own, under the given 'work' section, or at all */}
        {/* IF I add the dropdown in Contact, then this is automatically relevant */}
        {/* <IconLinkWrap
          handleClick={()=> handleSectionIconClick()}
          active={isActive('/testimonials')}

          iconStates={icons.testimonials}
          name={SectionsEnum.FEEDBACK}
          color="dark"
        /> */}
          <StyledLocaleButton
            onClick={handleLanguageChange}
          >{isEnglish ? t('ns3:fr') : t('ns3:en')}</StyledLocaleButton>
      </StyledNavbarWrapper>
    </>
  );
};

const IconLinkWrap = ({ iconStates, color, name, active, handleClick }: IIconLinkWrapProps): JSX.Element => {
  const [hovered, setHovered] = useState<boolean>(false);
  const { t } = useTranslation(['ns3']);

  return (
    <StyledIconLink
      active={active}
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

export default Navbar;