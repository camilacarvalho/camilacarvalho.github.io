import React from 'react';
import Card from '../components/card';
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import imagemCanva from '../assets/canva.png';
import imagemForm from '../assets/form.jpg';
import imagemDocs from '../assets/doc.png';
import imagemPlanilha from '../assets/planilha.png';
import imagemSlides from '../assets/apresentacao.png';
import imagemOfice from '../assets/office.png';

const ferramenta1 = {
  title: 'Canva',
  subtitle: '',
  link: 'https://www.canva.com/',
  imagemLink: imagemCanva,
  tags: ['design'],
};
const ferramenta2 = {
  title: 'Microsoft Office',
  subtitle: 'Word, Excel e Powerpoint',
  link: 'https://www.google.com/forms/about/',
  imagemLink: imagemOfice,
  tags: ['suite de aplicativos para escritorio'],
};
const doc = {
  title: 'Documentos Google',
  subtitle: '',
  link: 'https://www.google.com/intl/pt-BR/docs/about/',
  imagemLink: imagemDocs,
  tags: ['Documentos'],
};
const planilha = {
  title: 'Planilhas Google',
  subtitle: '',
  link: 'https://www.google.com/intl/pt-BR/sheets/about/',
  imagemLink: imagemPlanilha,
  tags: ['Planilhas'],
};
const apresentacao = {
  title: 'Apresentação Google',
  subtitle: '',
  link: 'https://www.google.com/intl/pt-BR/slides/about/',
  imagemLink: imagemSlides,
  tags: ['Slides'],
};
const forms = {
  title: 'Google Forms',
  subtitle: '',
  link: 'https://www.google.com/forms/about/',
  imagemLink: imagemForm,
  tags: ['formulário'],
};
const CompetenciasPage = () => (
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
        <h1 className="title  is-size-4 has-text-centered">Competências</h1>
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
            <p className="subtitle is-size-6 has-text-centered">
              Outras ferramentas:
            </p>
            <div class="columns">
              <div class="column">
                <Card key={ferramenta1.title} {...ferramenta1} />
              </div>
              <div class="column">
                <Card key={ferramenta2.title} {...ferramenta2} />
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <Card key={doc.title} {...doc} />
              </div>
              <div class="column">
                <Card key={planilha.title} {...planilha} />
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <Card key={apresentacao.title} {...apresentacao} />
              </div>
              <div class="column">
                <Card key={forms.title} {...forms} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default CompetenciasPage;
