import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import profileImage from '../assets/profile.jpg';
const socialMedias = [
  {
    icon: 'fa-linkedin-in',
    link: 'https://www.linkedin.com/in/camila-carvalho-da-silva-773752123/',
  },
  {
    icon: 'fa-github',
    link: 'https://github.com/camilacarvalho',
  },
  {
    icon: 'fa-gitlab',
    link: 'https://gitlab.com/camilacarvalho',
  },
];
const IndexPage = () => (
  //componente react sendo renderizado
  // (LAYOUT) outro componente react

  <Layout>
    <div className="container">
      <figure className="photo image is-128x128">
        <img
          className="is-rounded"
          src={profileImage}
          alt="imagem de perfil - Camila Carvalho"
        />
      </figure>
    </div>
    <div className="container">
      <h1 className="title is-size-4 has-text-centered">
        {' '}
        Camila Carvalho da Silva
      </h1>
      <h2 className="subtitle is-size-6 has-text-centered">
        Graduanda em Ciência da Computação - UFCG{' '}
        <span role="img" aria-label="aceno">
          👩‍🎓 👩‍💻
        </span>
        <p>Atualmente no 8º periodo</p>
      </h2>
      <div className="has-text-centered">
        {socialMedias.map(socialMedia => (
          <a
            href={socialMedia.link}
            key={socialMedia.icon}
            aria-label={socialMedia.icon}
          >
            <span className="icon is-large">
              <i className={`fab fa-2x ${socialMedia.icon}`} />
            </span>
          </a>
        ))}
      </div>
    </div>

    <section className="section">
      <div className="container">
        <h3>
          <p>
            Esse é o meu portfólio para apresentar minhas experiências e
            conhecimentos.
          </p>
        </h3>
        <p>
          Veja meus <Link to="/projects">projetos pessoais.</Link>
        </p>
      </div>
    </section>
  </Layout>
);
// O Link ajuda a ter um comportamento de página SPA. Não fica lento!
//Não sentimos que foi feita uma troca de página.

export default IndexPage;
