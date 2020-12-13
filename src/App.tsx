import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppRoutesEnum } from './ROUTES';
// TODO: Fix import to point to components index
import LandingPage from './COMPONENTS/Landing/LandingPage';
import Work from './COMPONENTS/Work/Work';

const AppRoutes = (): JSX.Element => {
  return (
    <>
      <Route 
        exact path="/" render={() => <Redirect to={AppRoutesEnum.LANDING} />} 
      />
      <Route 
        path={AppRoutesEnum.LANDING} component={LandingPage} 
      />
      <Route 
        path={AppRoutesEnum.WORK} component={Work} 
      />
    </>
  );
};

export default AppRoutes;