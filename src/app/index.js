import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
// import 'primereact/resources/themes/nova-light/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
import 'normalize.css';
import './main.scss';
// import 'react-toastify/dist/ReactToastify.css';


// axios.defaults.headers.common.Authorization = localStorage.getItem('token');

const MainRoutes = lazy(() => import('../pages/admin'));

const App = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route component={MainRoutes} />
      </Switch>
    </Suspense>
  );
};

export default App;
