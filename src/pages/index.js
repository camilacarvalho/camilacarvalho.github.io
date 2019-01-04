import React from 'react';
import Card from '../components/card';
import Layout from '../components/layout';
import profileImage from '../assets/profile.jpg';
import imagemEter from '../assets/eter.jpeg';
import imagemUfcg from '../assets/ufcg.jpg';
import imagemcodex from '../assets/codex.png';
import imagemAeC from '../assets/aec.jpg';
const experienciasp = [
  {
    title: 'Atendente Técnico na AeC – Relacionamento com Responsabilidade',
    subtitle: 'Período:  02/01/2014 a 13/07/2015',
    link: 'https://www.aec.com.br/',
    imagemLink: imagemAeC,
    tags: ['AeC', 'atendenteTecnico', 'informatica'],
  },
];
const formacoes = [
  {
    title: 'Técnico em Informática no ETER',
    subtitle:
      'Período: Janeiro de 2012 a julho de 2013 (Carga Horária: 1080 h/a).',
    link:
      'http://www.redentorista.org.br/index.php/cursos-tecnicos/cursos-tecnicos/informatica.html',
    imagemLink: imagemEter,
    tags: ['Eter', 'tecnico', 'informatica', 'redentorista', 'formacao'],
  },
  {
    title: 'Ciência da Computação na UFCG',
    subtitle:
      'Período: Julho de 2015 a Julho de 2020 (Carga Horária: 3.210 horas e 200 créditos).',
    link: 'http://www.computacao.ufcg.edu.br/graduacao',
    imagemLink: imagemUfcg,
    tags: ['ciencia da computacao', 'ufcg', 'graduacao', '5 estrelas'],
  },
];
const experiencias = [
  {
    title: 'Diretora de recursos humanos',
    subtitle: 'na CODEX (Empresa Junior de Computação)',
    link: 'https://www.facebook.com/codexjr/',
    imagemLink: imagemcodex,
    tags: ['ciencia da computacao', 'ufcg', 'graduacao', '5 estrelas'],
  },
  {
    title: 'Monitorias na Universidade Federal de Campina Grande (UFCG)',
    subtitle: 'nas disciplinas de Estrutura de dados e Lógica para computação',
    link: 'http://www.computacao.ufcg.edu.br/graduacao/monitoria',
    imagemLink: imagemUfcg,
    tags: [
      'ciencia da computacao',
      'ufcg',
      'graduacao',
      '5 estrelas',
      'monitoria',
      'Logica para computacao',
      'Estrutura de dados',
    ],
  },
];
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
  {
    icon: 'fa-instagram',
    link: 'https://www.instagram.com/camilaoak_/',
  },
];

const IndexPage = () => (
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
        <p>Atualmente no 8º período.</p>
        <p>Campina Grande, Paraíba, Brasil</p>
        <div className="has-text-centered">
          {socialMedias.map(socialMedia => (
            <a
              href={socialMedia.link}
              key={socialMedia.icon}
              aria-label={socialMedia.icon}
            >
              <span className="icon is-medium">
                <i className={`fab fa-lg ${socialMedia.icon}`} />
              </span>
            </a>
          ))}
        </div>
      </h2>
    </div>
    <hr />
    <section className="section">
      <div className="container has-text-centered">
        <h1 className="subtitle  is-size-5 has-text-centered">
          Formação acadêmica
        </h1>

        <div className="columns is-centered">
          <div className="column is-half">
            {formacoes.map(formacao => (
              <Card key={formacao.title} {...formacao} />
            ))}
          </div>
        </div>

        <h1 className="subtitle  is-size-5 has-text-centered">
          Experiências Acadêmicas
        </h1>

        <div className="columns is-centered">
          <div className="column is-half">
            {experiencias.map(experiencia => (
              <Card key={experiencia.title} {...experiencia} />
            ))}
          </div>
        </div>

        <h1 className="subtitle  is-size-5 has-text-centered">
          Experiências Profissionais
        </h1>

        <div className="columns is-centered">
          <div className="column is-half">
            {experienciasp.map(experienciap => (
              <Card key={experienciap.title} {...experienciap} />
            ))}
          </div>
        </div>
        <p>
          Este portfólio foi feito por mim utilizando{' '}
          <a href="https://www.gatsbyjs.org/docs/">gatsby</a>.
        </p>
      </div>
    </section>
  </Layout>
);
export default IndexPage;
