import React from 'react';
import PageContainer from './COMPONENTS/common/PageContainer';
import Sidebar, { SectionsEnum } from './COMPONENTS/common/Sidebar';
import Footer from './COMPONENTS/common/Footer';
import { StyledPageContent } from './COMPONENTS/common';
import LandingPage from './COMPONENTS/Landing/LandingPage';
import Contact from './COMPONENTS/Contact/Contact';
import Bio from './COMPONENTS/Bio/Bio';
import Work from './COMPONENTS/Work/Work';
import { FR } from './UTILS/locale';
import Lang from 'lang.js';

declare global {
  interface Window { lang: any; }
}

export enum LocalesEnum {
  EN = 'en',
  FR = 'fr_ca'
}

const lang = new Lang({
  messages: FR,
    locale: LocalesEnum.EN,
  fallback: LocalesEnum.FR
});

console.log({ test: lang.get('landing.greetings')});
window.lang = lang;

const AppLayout = ():JSX.Element => {
  return (
    <>
      <Sidebar />
      <PageContainer >
        <StyledPageContent id={SectionsEnum.HOME}>
          <LandingPage />
        </StyledPageContent>
        <StyledPageContent id={SectionsEnum.BIO}>
          <Bio />
        </StyledPageContent>
        <StyledPageContent id={SectionsEnum.CONTACT}>
          <Contact />
        </StyledPageContent>
        <StyledPageContent id={SectionsEnum.WORK}>
          <Work />
        </StyledPageContent>
        <Footer />
      </PageContainer>
    </>
  );
};

export default AppLayout;