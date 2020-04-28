import Head from 'next/head';
import fourOhFour from '../../public/img/404.svg';
import fiveHundred from '../../public/img/500.svg';

const CustomErrorPage = ({ statusCode }) => {
  return (
    <>
      <Head>
        <title>{statusCode ? 'Erro Inesperado' : 'Página Não Encontrada'} - COVID-19 Dashboard</title>
      </Head>

      <div className="error">
        <img src={statusCode ? fourOhFour : fiveHundred} alt="Error" />
        <h1>{statusCode ? 'Oops, houve um erro inesperado :(' : 'Página Não Encontrada!'}</h1>
      </div>
    </>
  )
}

CustomErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : (
    err ? err.statusCode : 404
  );

  return {
    statusCode,
  }
}

export default CustomErrorPage;
