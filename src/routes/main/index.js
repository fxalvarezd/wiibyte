import React from 'react';
import Main from './Main';
import Layout from '../../components/Layout';

function action() {
  return {
    title: 'Home',
    component: (
      <Layout>
        <Main />
      </Layout>
    ),
  };
}

export default action;
