import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

function action() {
  return {
    title: 'Home',
    component: (
      <Layout>
        <Home />
      </Layout>
    ),
  };
}

export default action;
