import React from 'react';
import Layout from '../components/layout';
import Helmet from 'react-helmet';

const StackPage = () => (
  <Layout>
    <Helmet>
      <script
        async
        src="https://cdn1.stackshare.io/javascripts/client-code.js"
        charset="utf-8"
      />
    </Helmet>
    <section className="section is-size-5-desktop is-size-6-touch">
      <div className="container">
        <h1 className="title  is-size-4 has-text-centered">Stack</h1>
        <hr />
        <p className="subtitle is-size-6 has-text-centered">
          Essas são algumas das ferramentas que conheço e que compartilho na
          minha stack no StackShare:
        </p>

        <div className="columns is-centered">
          <div className="column is-half has-text-centered">
            <a
              frameborder="0"
              data-theme="light"
              data-layers="1,2,3,4"
              data-stack-embed="true"
              href="https://embed.stackshare.io/stacks/embed/f054dce0a41c46c5bbe34fd169108b"
            >
              Stack
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default StackPage;
