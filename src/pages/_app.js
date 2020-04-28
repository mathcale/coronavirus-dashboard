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

        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" key="viewport" />
        <meta name="author" content="Matheus Calegaro <hello@matheus.me>" />
        <meta name="description" content="Acompanhe os números e estatísticas atualizadas do COVID-19 no Brasil e no Mundo de forma simplificada e rápida." />
        <meta name="keywords" content="coronavirus,covid-19,covid19,dashboard,data,analytics,brasil,mundo,world,virus" />
        <meta name="robots" content="index,follow" />

        <meta name="theme-color" content="#e74d5f" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="COVID-19 Dashboard" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://covid19.matheus.me" />
        <meta name="twitter:title" content="COVID-19 Dashboard" />
        <meta name="twitter:description" content="Acompanhe os números e estatísticas atualizadas do COVID-19 no Brasil e no Mundo de forma simplificada e rápida." />
        <meta name="twitter:image" content="https://covid19.matheus.me/img/icons/icon-192x192.png" />
        <meta name="twitter:creator" content="@DavidWShadow" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="COVID-19 Dashboard" />
        <meta property="og:description" content="Acompanhe os números e estatísticas atualizadas do COVID-19 no Brasil e no Mundo de forma simplificada e rápida." />
        <meta property="og:site_name" content="COVID-19 Dashboard" />
        <meta property="og:url" content="https://covid19.matheus.me" />
        <meta property="og:image" content="https://covid19.matheus.me/img/icons/icon-192x192.png" />

        <title>COVID-19 Dashboard - Dados Atualizados Sobre a Pandemia</title>

        <link rel="shortcut icon" href="/img/virus.png" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="apple-touch-icon" href="/img/icons/icon-152x152" />
        <link rel="apple-touch-icon" href="/img/icons/icon-96x96" sizes="76x76" />
        <link rel="apple-touch-icon" href="/img/icons/icon-128x128" sizes="120x120" />
        <link rel="apple-touch-icon" href="/img/icons/icon-152x152" sizes="152x152" />
        <link rel="icon" href="/img/icons/icon-128x128.png" sizes="128x128" />
        <link rel="icon" href="/img/icons/icon-192x192.png" sizes="192x192" />

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
