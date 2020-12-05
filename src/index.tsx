import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ASSETS/styles.scss'
import AppRoutes from './App';
import reportWebVitals from './reportWebVitals';
import {StyledBaseBG} from './COMPONENTS/common';
import Navigation from './COMPONENTS/common/Navigation';
import PageContainer from './COMPONENTS/common/PageContainer';

ReactDOM.render(
  <Router>
    <StyledBaseBG>
      <PageContainer>
        <Navigation />
        <AppRoutes />
      </PageContainer>
    </StyledBaseBG>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
