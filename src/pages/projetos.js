import React from 'react';
import Card from '../components/card';
import imagemMusiteca from '../assets/musiteca.png';
import imagemTwoOaks from '../assets/twoOaks.jpg';
import imagemBtd from '../assets/bibliaTodoDia.png';
import imagemInstagram from '../assets/instagram.png';
import imagemOmeqm from '../assets/oMestreEQuemManda.png';
import imagemAgiliza from '../assets/agiliza.png';
import Layout from '../components/layout';

const projectDiscip = [
  {
    title: 'Agiliza',
    subtitle:
      'Aplicativo desenvolvido durante a disciplina de Engenharia de software utilizando Ionic 3 e Firebase',
    link:
      'https://github.com/camilacarvalho/Agiliza---projeto-disciplina-engenharia-de-software',
    imagemLink: imagemAgiliza,
    tags: ['agiliza', 'aplicativo', 'firebase', 'ionic 3'],
  },
  {
    title: 'Musiteca',
    subtitle:
      'Site desenvolvido durante a disciplina de Projeto de software utilizando AngularJS, Spring Boot, Postgresql, Heroku',
    link: 'http://minhamusiteca.herokuapp.com/',
    imagemLink: imagemMusiteca,
    tags: [
      'Musiteca',
      'site',
      'Heroku',
      'Spring Boot',
      'AngularJS',
      'Postgresql',
    ],
  },
];
const projectPessoais = [
  {
    title: 'O mestre é quem manda',
    subtitle: 'Aplicativo desenvolvido utilizando Android Studio',
    link:
      'https://play.google.com/store/apps/details?id=com.a2oak.omestreehquemmanda',
    imagemLink: imagemOmeqm,
    tags: ['Android', 'Android Studio', 'O mestre e quem manda', 'aplicativo'],
  },
  {
    title: 'Bíblia Todo Dia',
    subtitle: 'Aplicativo desenvolvido utilizando ionic 3 e firebase',
    link: '',
    imagemLink: imagemBtd,
    tags: ['biblia todo dia', 'aplicativo', 'firebase', 'ionic 3'],
  },
  {
    title: 'Two Oaks',
    subtitle: 'Site desenvolvido utilizando Angular 6',
    link: 'https://camilacarvalho.github.io/2oaks/#/',
    imagemLink: imagemTwoOaks,
    tags: ['Angular 6', 'Two oaks', 'site'],
  },
  {
    title: 'Instagram @TwoOaksApps',
    subtitle: 'Designer de postagens e logomarcas no @TwoOaksApps',
    link: 'https://www.instagram.com/twooaksapps/',
    imagemLink: imagemInstagram,
    tags: ['instagram', 'design', 'postagens', 'logomarca'],
  },
];

const ProjetosPage = () => (
  <Layout>
    <section className="section">
      <div className="container has-text-centered">
        <h1 className="title  is-size-4 has-text-centered">Projetos</h1>
        <hr />
        <div className="columns is-centered">
          <div className="column is-half">
            <p className=" subtitle is-6 has-text-left">
              Projetos desenvolvidos durante as disciplinas:
            </p>
            {projectDiscip.map(projectDis => (
              <Card key={projectDis.title} {...projectDis} />
            ))}
            <p className="subtitle is-6 has-text-left">Outros projetos:</p>
            {projectPessoais.map(projectPessoal => (
              <Card key={projectPessoal.title} {...projectPessoal} />
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
export default ProjetosPage;
