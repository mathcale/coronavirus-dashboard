import Head from 'next/head';

const Custom404Page = () => (
  <>
    <Head>
      <title>Página Não Encontrada - COVID-19 Dashboard</title>
    </Head>

    <div className="error">
      <img src="/img/404.svg" />
      <h1>Página Não Encontrada!</h1>
    </div>
  </>
);

export default Custom404Page;
