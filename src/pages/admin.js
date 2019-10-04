import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SingIn from '../auth/sign-in';
// import ResetPassword from '../auth/reset-password';
import ForgotPassword from '../auth/forgot-password';
import PrivateRoute from '../auth/private-route';

import AdminPages from './pages';

const Admin = ({ match }) => {
  return (
    <>

      <Switch>
        <Route path={'/login'} component={SingIn} />
        <Route path={'/forgot-password'} component={ForgotPassword} />
        {/* <Route path={`${match.path}/reset-password/:token`} component={ResetPassword} /> */}
        <PrivateRoute component={AdminPages} />
      </Switch>
    </>
  );
};

export default Admin;
