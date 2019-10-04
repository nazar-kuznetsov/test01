import React, { Component, Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import Header from '../modules/header';
import Sidebar from '../modules/sidebar';
import './pages.scss';

const Home = lazy(() => import('./home'));
const Media = lazy(() => import('./media'));
const Users = lazy(() => import('./users'));
const Appeal = lazy(() => import('./appeal'));

const Pages = () => (
  <div className="page-layout">
    <Sidebar />
    <Header />
    <main className="main">
      <Suspense fallback={null}>
        <Route path={'/'} component={Home} exact={true} />
        <Route path={'/media'} component={Media} />
        <Route path={'/users'} component={Users} />
        <Route path={'/appeal'} component={Appeal} />
      </Suspense>
    </main>
  </div>
);

export default Pages;
