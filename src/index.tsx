import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ASSETS/styles.scss'
import reportWebVitals from './reportWebVitals';
import PageContainer from './COMPONENTS/common/PageContainer';
import Lang from 'lang.js';
import Sidebar, { SectionsEnum } from './COMPONENTS/common/Sidebar';
import Footer from './COMPONENTS/common/Footer';
import { StyledPageContent } from './COMPONENTS/common';
import LandingPage from './COMPONENTS/Landing/LandingPage';
import Contact from './COMPONENTS/Contact/Contact';
import Bio from './COMPONENTS/Bio/Bio';
import Work from './COMPONENTS/Work/Work';

declare global {
  interface Window { lang: any; }
}

enum LocalesEnum {
  EN = 'en',
  FR = 'fr_ca'
}

var lang = new Lang({
  messages: './UTILS/locale',
  locale: LocalesEnum.EN,
  fallback: LocalesEnum.FR
});

lang.setLocale(LocalesEnum.EN);

window.lang = lang;

ReactDOM.render(
  <>
    <Sidebar />
      <PageContainer>
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
  </>,
  document.getElementById('root')
);

reportWebVitals();
