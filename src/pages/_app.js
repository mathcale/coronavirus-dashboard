import { useState, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';

import { loadFonts } from '../utils';
import * as gtag from '../utils/gtag';

const CustomApp = ({ Component, pageProps }) => {
  const [language, setLanguage] = useState('pt-BR');

  useEffect(() => {
    loadFonts();
    Router.events.on('routeChangeComplete', url => gtag.pageview(url));

    if (typeof window !== 'undefined')
      setLanguage(navigator.language);

    return function() {
      document.documentElement.classList.remove('with-roboto', 'with-montserrat');
    };
  }, []);

  return (
    <div className="app-wrapper">
      <Head>
        <title>COVID-19 Dashboard</title>
        <link rel="shortcut icon" href="/img/virus.png" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="author" content="Matheus Calegaro <hello@matheus.me>" />
        <meta name="description" content="Follow COVID-19 infection and recovery numbers around the world" />
        <meta name="keywords" content="coronavirus,covid-19,covid19,dashboard,data,analytics,brasil,mundo,world,virus" />

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

      <Component {...pageProps} lang={language} />
    </div>
  );
};

export default CustomApp;
