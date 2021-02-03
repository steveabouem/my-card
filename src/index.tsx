import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ASSETS/styles.scss'
import AppRoutes from './App';
import reportWebVitals from './reportWebVitals';
// import {StyledBaseBG} from './COMPONENTS/common';
import PageContainer from './COMPONENTS/common/PageContainer';
import Lang from 'lang.js';
import Sidebar from './COMPONENTS/common/Sidebar';
import Footer from './COMPONENTS/common/Footer';
// import BgProvider from './COMPONENTS/common/BgProvider';

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
  <Router>
    <Sidebar />
    <Switch>
      <PageContainer>
        <AppRoutes />
        <Footer />
      </PageContainer>
    </Switch>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
