import React from 'react';
import Card from '../components/card';
import Layout from '../components/layout';
import imagem from '../images/gatsby-astronaut.png';
import { Link } from 'gatsby';

const projectCards = [
  {
    title: 'Two Oaks',
    subtitle: 'Site desenvolvido utilizando Angular 6',
    link: 'https://camilacarvalho.github.io/2oaks/#/',
    imagemLink: imagem,
    tags: ['React', 'PWA'],
  },
  {
    title: 'Two Oaks',
    subtitle: 'Site desenvolvido utilizando Angular 6',
    link: 'https://camilacarvalho.github.io/2oaks/#/',
    imagemLink: imagem,
    tags: ['React', 'PWA'],
  },
  {
    title: 'Two Oaks',
    subtitle: 'Site desenvolvido utilizando Angular 6',
    link: 'https://camilacarvalho.github.io/2oaks/#/',
    imagemLink: imagem,
    tags: ['React', 'PWA'],
  },
];

const ProjectsPage = () => (
  <Layout>
    <section className="section is-size-5-desktop is-size-6-touch">
      <div className="container">
        <h1 className="title has-text-centered">Projetos</h1>
        <hr />
        <p className="content has-text-centered">
          Alguns dos meus projetos de destaque, veja mais no meu{' '}
          <a href="https://github.com/camilacarvalho">GitHub.</a>
        </p>

        <div className="columns is-centered">
          <div className="column is-half">
            {projectCards.map(projectCard => (
              <Card key={projectCard.title} {...projectCard} />
            ))}
          </div>
        </div>
        <p>
          Veja minha <Link to="/stack">stack de ferramentas</Link>
        </p>
      </div>
    </section>
  </Layout>
);

export default ProjectsPage;
