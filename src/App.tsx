import React from 'react';
import PageContainer from './COMPONENTS/common/PageContainer';
import Navbar, { SectionsEnum } from './COMPONENTS/common/Navbar';
import Footer from './COMPONENTS/common/Footer';
import { StyledPageContent } from './COMPONENTS/common';
import LandingPage from './COMPONENTS/Landing/LandingPage';
import Contact from './COMPONENTS/Contact/Contact';
import Bio from './COMPONENTS/Bio/Bio';
import Work from './COMPONENTS/Work/Work';
import Services from "./COMPONENTS/Services/Services";
import Pricing from "./COMPONENTS/Pricing/Pricing";

const AppLayout = ():JSX.Element => {
  // /**LOGIC**/
  // StyledPageContent ids below are targeted by Navbar to scroll to the relevant section
  return (
      <>
        <Navbar />
          <PageContainer >
            <StyledPageContent id={SectionsEnum.HOME}>
              <LandingPage />
            </StyledPageContent>
            <StyledPageContent id={SectionsEnum.SERVICES}>
              <Services />
            </StyledPageContent>
            <StyledPageContent id={SectionsEnum.PRICING}>
              <Pricing />
            </StyledPageContent>
            <StyledPageContent id={SectionsEnum.WORK}>
              <Work />
            </StyledPageContent>
            <StyledPageContent id={SectionsEnum.BIO}>
              <Bio />
            </StyledPageContent>
            <StyledPageContent id={SectionsEnum.CONTACT}>
              <Contact />
            </StyledPageContent>
          </PageContainer>
        <Footer />
      </>
  );
};

export default AppLayout;