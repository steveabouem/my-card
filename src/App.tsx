import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppRoutesEnum } from './ROUTES';
// TODO: Fix import to point to components index
import LandingPage from './COMPONENTS/Landing/LandingPage';
import Work from './COMPONENTS/Work/Work';
import Bio from './COMPONENTS/Bio/Bio';
import { StyledPageContent } from './COMPONENTS/common';
import Contact from './COMPONENTS/Contact/Contact';

const AppRoutes = (): JSX.Element => {
  return (
    <StyledPageContent>
      <Route 
        exact path="/" render={() => <Redirect to={AppRoutesEnum.LANDING} />} 
      />
      <Route 
        path={AppRoutesEnum.LANDING} component={LandingPage} 
      />
      <Route
        path={AppRoutesEnum.BIO} component={Bio}
      />
      <Route
        path={AppRoutesEnum.CONTACT} component={Contact}
      />
      <Route 
        path={AppRoutesEnum.WORK} component={Work} 
      />
    </StyledPageContent>
  );
};

export default AppRoutes;