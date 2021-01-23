import React, { useEffect, useState } from 'react';
import rar from '../../ASSETS/rdq.gif';
import ou_t from '../../ASSETS/ou-t.gif';
import SectionTitle from '../common/SectionTitle';
import { StyledBgOverlay, StyledPreviewImage, StyledNavLink, StyledModalWrap, StyledCloseIcon, StyledLinkBanner, StyledBannerSlider } from '../styles';
import { icons } from '../common';

const Work = (): JSX.Element => {
  // TODO: this will of course come from the backend, match the id to use it in the modal  
  // (so that you only need to pass the workId prop to display all the info)
  const [activeModals, setActiveModals] = useState<{[key:string]: boolean}>({rar: false, ou_t: false, rar2: false});
  // TODO: add a filter in the section title that will sort by collab and individual work 

  useEffect(() => {
    
  }, []);

  return (
    <div>
      <SectionTitle title="projects" />
      <div className="d-flex justify-content-between pt-2">
        <StyledNavLink>
          <div className="px-0">
            <StyledBgOverlay 
              className="bg-overlay"
              color="#fc6557f5"
              onClick={() => setActiveModals({...activeModals, rar: !activeModals.rar})}
            >Regroupement Arts de Rues (QC)</StyledBgOverlay>
            <StyledPreviewImage style={{backgroundImage: `url(${rar})`}}/>
          </div>
        </StyledNavLink>
        <StyledNavLink>
          <div className="px-0">
            <StyledBgOverlay 
              className="bg-overlay"
              color="#b24876f3"
              onClick={() => setActiveModals({ ...activeModals, ou_t: !activeModals.ou_t })}  
            >Ou-T</StyledBgOverlay>
            <StyledPreviewImage style={{backgroundImage: `url(${ou_t})`}} />
          </div>
        </StyledNavLink>
        <StyledNavLink>
          <div className="px-0">
            <StyledBgOverlay 
              className="bg-overlay" 
              color="#f6b41eed"
              onClick={() => setActiveModals({ ...activeModals, rar2: !activeModals.rar2 })}
            >SENELOUER</StyledBgOverlay>
            <StyledPreviewImage style={{backgroundImage: `url(${rar})`}} />
          </div>
        </StyledNavLink>
      </div>
      {activeModals?.rar2 && <WorkModal />}
    </div>
  );
};

const CloseIcon = (): JSX.Element => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <StyledCloseIcon
      color="#1b5381" 
      icon={hovered ? icons.close.hover : icons.close.static}
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
    />
  );
};

const WorkModal = () => {
  const [activeBanner, setActiveBanner] = useState<boolean>(false);

  return (
    <StyledModalWrap id="work-item-modal">
      <CloseIcon />
      <StyledLinkBanner onMouseEnter={() => setActiveBanner(true)} onMouseLeave={() => setActiveBanner(false)}>
        VISIT
        {activeBanner && <StyledBannerSlider>VISIT</StyledBannerSlider>}
      </StyledLinkBanner>
      <div>RAR 2</div>
      <div>Description</div>
      <div>Learn More</div>
    </StyledModalWrap>
  );
};

export default Work;