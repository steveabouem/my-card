import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { AppRoutesEnum } from './ROUTES';
// TODO: Fix import to point to components index
import LandingPage from './COMPONENTS/Landing/LandingPage';

const AppRoutes = (): JSX.Element => {
  return (
    <Switch>
      <Route 
        exact path="/" render={() => <Redirect to={AppRoutesEnum.LANDING} />} 
      />
      <Route 
        path={AppRoutesEnum.LANDING} component={LandingPage} 
      />
    </Switch>
  );
};

export default AppRoutes;