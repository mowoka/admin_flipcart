import React from 'react';
import Layout from '../../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="d-flex justify-content-center align-items-center h-100 mt-5">
        <div class="container-fluid text-sm-center p-5 bg-light">
          <h1 class="display-2">Welcome to Admin Dashboard</h1>
          <p class="lead">admin dashboard to manage the ecommerce app!</p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
