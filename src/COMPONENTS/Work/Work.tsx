import React, {useEffect, useMemo, useState} from 'react';
import styled from "styled-components";
import { useInView } from 'react-intersection-observer';
import {useTranslation} from "react-i18next";
import i18next from 'i18next';
import '../../UTILS/i18n/config';

import rar from '../../ASSETS/rdq.gif';
import ou_t from '../../ASSETS/ou-t.gif';
import SectionTitle from '../common/SectionTitle';
import {
  StyledBgOverlay,
  StyledPreviewImage,
  StyledModalWrap,
  StyledCloseIcon,
  StyledLinkBanner,
  StyledBannerSlider,
  StyledModalCurtain,
  StyledModalTitle,
  StyledModalBody,
  StyledModalBottom,
  StyledPaddedContentWrap
 } from '../styles';
import { icons } from '../common';
import reactLogo from '../../ASSETS/logo192.png';
import phpLogo from '../../ASSETS/php-logo.png';
import tsLogo from '../../ASSETS/ts-logo.png';
import firebaseLogo from '../../ASSETS/firebase.jpg';
import laravelLogo from '../../ASSETS/laravel.png';
import { workiItems } from '../../API/repositories/testData/workItems';
import { IWorkItem } from '../../API/dto/workItems.dto';

interface IWorkItemModalProps {
  onClose: () => void;
  item: IWorkItem,
}

const StyledProjectsWrap = styled.div`
  display: flex;
  padding: .5rem;
  justify-content: space-between;
  @media (max-width: 768px) {
    &&& {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const StyledNavLink = styled.div`
  padding: 0;
  max-height: 200px;
  position: relative;
  width: 33%;
  max-width: 33%;
  color: white;
  text-decoration: none;
  overflow: hidden;

  &:hover, &:focus, &:active, &:visited {
    color: white;
    text-decoration: none;
    .bg-overlay {
      display: flex;
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 1rem 0;
    max-width: 100%;
  }
`;

// const isModalOpen = (options: {[key:string]: boolean}) => (Object.values(options).filter((value: boolean) => value || null).length > 0);
const previewList = [rar, ou_t, ou_t];

const Work = (): JSX.Element => {
  const { t } = useTranslation(['ns5']);
  // TODO: this will of course come from the backend, match the id to use it in the modal  
  // (so that you only need to pass the workId prop to display all the info), this will also extend to whether or not the item has a url to visit
  const [activeModals, setActiveModals] = useState<{[key:string]: boolean}>({1: false, 2: false, 3: false});
  // TODO: add a filter in the section title that will sort by collab and individual work 
  const [currentItem, setCurrentItem] = useState<IWorkItem | undefined>(undefined);
  const { ref, inView } = useInView();

  const closeModalHandler = () => {
    const inactiveList = Object.keys(activeModals).reduce((acc, id) => ({ ...acc, [id]: false }), {});
    setCurrentItem(undefined);
    setActiveModals(inactiveList);
  };

  return (
    <StyledPaddedContentWrap ref={ref}>
      {inView && <SectionTitle title={t('ns5:section_title')} isInview={inView} />}
      <StyledProjectsWrap>
        {workiItems.map((item: IWorkItem, index: number) => (
          <StyledNavLink key={`work-item-${index}`}>
            <div className="px-0">
              <StyledBgOverlay 
                className="bg-overlay"
                color="#fc6557f5"
                onClick={() => setCurrentItem(item)}
              >{item.title}</StyledBgOverlay>
              <StyledPreviewImage style={{backgroundImage: `url(${previewList[item.id - 1]})`}}/>
            </div>
          </StyledNavLink>
        ))}
      </StyledProjectsWrap>
      {currentItem && <WorkItemModal item={currentItem} onClose={closeModalHandler} />}
    </StyledPaddedContentWrap>
  );
};

const CloseIcon = ({onClose}: {onClose: () => void}): JSX.Element => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <StyledCloseIcon
      color="#1b5381" 
      icon={hovered ? icons.close.hover : icons.close.static}
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
      onClick={onClose}
    />
  );
};

const WorkItemModal = ({onClose, item}: IWorkItemModalProps): JSX.Element => {
  const { t } = useTranslation(['ns5']);
  const [activeBanner, setActiveBanner] = useState<boolean>(false);

  const currentLanguage: string = useMemo(() => {
    return i18next.language;
  },[]);

  return (
    <StyledModalCurtain>
      <StyledModalWrap id="work-item-modal">
        <CloseIcon onClose={onClose} />
        <StyledLinkBanner onMouseEnter={() => setActiveBanner(true)} onMouseLeave={() => setActiveBanner(false)}>
          {t('ns5:visit')}
          <StyledBannerSlider className={activeBanner ? 'active' : ''}>{t('ns5:visit')}</StyledBannerSlider>
        </StyledLinkBanner>
        <StyledModalTitle>{item.title}</StyledModalTitle>
        <StyledModalBody>{item.details[currentLanguage]}</StyledModalBody>
        <StyledModalBottom>
          <div className="font-weight-bold">{t('ns5:tools')}</div>
          <div>
            {item?.stack.react && <img src={reactLogo} alt="React" />}
            {item?.stack.laravel && <img src={laravelLogo} alt="Laravel" />}
            {item?.stack.firebase && <img src={firebaseLogo} alt="Firebase" />}
            {item?.stack.php && <img src={phpLogo} alt="PHP" />}
            {item?.stack.ts && <img src={tsLogo} alt="Typescript" />}
          </div>
        </StyledModalBottom>
      </StyledModalWrap>
    </StyledModalCurtain>
  );
};

export default Work;