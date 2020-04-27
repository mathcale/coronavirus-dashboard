import { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';

import { Layout } from '../components';
import { loadFonts } from '../utils';
import * as gtag from '../utils/gtag';

import 'flexboxgrid/dist/flexboxgrid.min.css';
import 'jvectormap-next/jquery-jvectormap.css';

const CustomApp = ({ Component, pageProps }) => {
  useEffect(() => {
    loadFonts();
    Router.events.on('routeChangeComplete', url => gtag.pageview(url));

    return function() {
      document.documentElement.classList.remove('with-roboto', 'with-icons');
    };
  }, []);

  return (
    <>
      <Head>
        <title>COVID-19 Dashboard - Dados Atualizados Sobre a Pandemia</title>
        <link rel="shortcut icon" href="/img/virus.png" />

        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" key="viewport" />
        <meta name="author" content="Matheus Calegaro <hello@matheus.me>" />
        <meta name="description" content="Acompanhe os números e estatísticas atualizadas do COVID-19 no Brasil e no Mundo de forma simplificada e rápida." />
        <meta name="keywords" content="coronavirus,covid-19,covid19,dashboard,data,analytics,brasil,mundo,world,virus" />
        <meta name="robots" content="index,follow" />

        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />

        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
        }} />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default CustomApp;
