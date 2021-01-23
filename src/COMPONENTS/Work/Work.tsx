import React from 'react';
import rar from '../../ASSETS/rdq.gif';
import ou_t from '../../ASSETS/ou-t.gif';
import SectionTitle from '../common/SectionTitle';
import { StyledBgOverlay, StyledDescriptionSection, StyledNavLink } from '../styles';

const Work = (): JSX.Element => {
  // TODO: add a filter in the section title that will sort by collab and individual work (these flag must of course come from the backend)
  return (
    <div>
      <SectionTitle title="PROJECTS" />
      <div className="d-flex justify-content-between pt-2">
        <StyledNavLink to="">
          <div className="px-0">
            <StyledBgOverlay className="bg-overlay" color="#fc6557f5"><span>Regroupement Arts de Rues (QC)</span></StyledBgOverlay>
            <StyledDescriptionSection style={{backgroundImage: `url(${rar})`}}>Description</StyledDescriptionSection>
          </div>
        </StyledNavLink>
        <StyledNavLink to="">
          <div className="px-0">
            <StyledBgOverlay className="bg-overlay" color="#b24876f3">Ou-T</StyledBgOverlay>
            <StyledDescriptionSection style={{backgroundImage: `url(${ou_t})`}}>Description</StyledDescriptionSection>
          </div>
        </StyledNavLink>
        <StyledNavLink to="">
          <div className="px-0">
            <StyledBgOverlay className="bg-overlay" color="#f6b41eed">SENELOUER</StyledBgOverlay>
            <StyledDescriptionSection style={{backgroundImage: `url(${rar})`}}>Description</StyledDescriptionSection>
          </div>
        </StyledNavLink>
      </div>
    </div>
  );
};

export default Work;