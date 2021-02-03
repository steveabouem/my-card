import React, { useState } from 'react';
import rar from '../../ASSETS/rdq.gif';
import ou_t from '../../ASSETS/ou-t.gif';
import SectionTitle from '../common/SectionTitle';
import { 
  StyledBgOverlay,
  StyledPreviewImage,
  StyledNavLink,
  StyledModalWrap,
  StyledCloseIcon,
  StyledLinkBanner,
  StyledBannerSlider,
  StyledModalCurtain,
  StyledModalTitle,
  StyledModalBody,
  StyledModalBottom
 } from '../styles';
import { icons } from '../common';
import reactLogo from '../../ASSETS/logo192.png';
import phpLogo from '../../ASSETS/php-logo.png';
import tsLogo from '../../ASSETS/ts-logo.png';
import firebaseLogo from '../../ASSETS/firebase.jpg';
import laravelLogo from '../../ASSETS/laravel.png';
import { workiItems } from '../../UTILS/workItems';
import { IWorkItem } from '../../API/dto/workItems.dto';

interface IWorkItemModalProps {
  onClose: () => void;
  item?: IWorkItem,
}

const isModalOpen = (options: {[key:string]: boolean}) => (Object.values(options).filter((value: boolean) => value || null).length > 0);
const previewList = [rar, ou_t, ou_t];
const Work = (): JSX.Element => {
  // TODO: this will of course come from the backend, match the id to use it in the modal  
  // (so that you only need to pass the workId prop to display all the info), this will also extend to whether or not the item has a url to visit
  const [activeModals, setActiveModals] = useState<{[key:string]: boolean}>({1: false, 2: false, 3: false});
  // TODO: add a filter in the section title that will sort by collab and individual work 
  const [currentItem, setCurrentItem] = useState<IWorkItem | undefined>(undefined);

  const closeModalHandler = () => {
    let inactiveList = Object.keys(activeModals).reduce((acc, id) => ({ ...acc, [id]: false }), {});
    setCurrentItem(undefined);
    setActiveModals(inactiveList);
  };

  return (
    <div>
      <SectionTitle title="projects" />
      <div className="d-flex justify-content-between pt-2">
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
      </div>
      {currentItem && <WorkItemModal item={currentItem} onClose={closeModalHandler} />}
    </div>
  );
};

const CloseIcon = ({onClose}: IWorkItemModalProps): JSX.Element => {
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
  const [activeBanner, setActiveBanner] = useState<boolean>(false);

  return (
    <StyledModalCurtain>
      <StyledModalWrap id="work-item-modal">
        <CloseIcon onClose={onClose} />
        <StyledLinkBanner onMouseEnter={() => setActiveBanner(true)} onMouseLeave={() => setActiveBanner(false)}>
          VISIT
          <StyledBannerSlider className={activeBanner ? 'active' : ''}>VISIT</StyledBannerSlider>
        </StyledLinkBanner>
        <StyledModalTitle>{item?.title || ''}</StyledModalTitle>
        <StyledModalBody>{item?.details || ''}</StyledModalBody>
        <StyledModalBottom>
          {item?.stack.react && <img src={reactLogo} alt="React" />}
          {item?.stack.laravel && <img src={laravelLogo} alt="Laravel" />}
          {item?.stack.firebase && <img src={firebaseLogo} alt="Firebase" />}
          {item?.stack.php && <img src={phpLogo} alt="PHP" />}
          {item?.stack.ts && <img src={tsLogo} alt="Typescript" />}
        </StyledModalBottom>
      </StyledModalWrap>
    </StyledModalCurtain>
  );
};

export default Work;