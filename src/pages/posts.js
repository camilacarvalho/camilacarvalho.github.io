import React from 'react';
import Card from '../components/card';
import Layout from '../components/layout';
import imagem from '../images/gatsby-astronaut.png';

const postsCards = [
  {
    title: 'Postagem no blog Two Oaks',
    subtitle: 'Só exemplo, blá blá',
    link: 'https://camilacarvalho.github.io/2oaks/#/',
    imagemLink: imagem,
    tags: ['React', 'PWA'],
  },
];

const PostsPage = () => (
  <Layout>
    <section className="section is-size-5-desktop is-size-6-touch">
      <div className="container">
        <h1 className="title has-text-centered">Posts</h1>
        <hr />
        <div className="columns is-centered">
          <div className="column is-half">
            {postsCards.map(postsCard => (
              <Card key={postsCard.title} {...postsCard} />
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default PostsPage;
