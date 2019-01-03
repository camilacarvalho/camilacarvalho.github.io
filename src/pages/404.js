import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="section is-size-5-desktop is-size-6-touch">
      <div className="container">
        <h1 className="title has-text-centered">NOT FOUND</h1>
        <p className="content has-text-centered">
          You just hit a route that doesn&#39;t exist... the sadness.
        </p>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
