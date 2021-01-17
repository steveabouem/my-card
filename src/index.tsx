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
// import BgProvider from './COMPONENTS/common/BgProvider';

const ReactFullpage = require('@fullpage/react-fullpage').default;

declare global {
  interface Window { lang: any; }
}

interface apiType {
  state: any;
  fullpageApi: any;
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

const Fullpage = ():JSX.Element => (
  <ReactFullpage
    //fullpage options
    licenseKey='YOUR_KEY_HERE'
    scrollingSpeed={1000} /* Options here */

    render={({ state, fullpageApi }: apiType): any => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(
  <Router>
    <Sidebar />
    <Fullpage />
    {/* <Switch>
      <PageContainer>
        <AppRoutes />
      </PageContainer>
    </Switch> */}
  </Router>,
  document.getElementById('root')
);


reportWebVitals();
