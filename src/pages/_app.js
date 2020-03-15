import { useEffect } from 'react';
import Head from 'next/head';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import { faChartLine, faGlobeAmericas, faBandAid } from '@fortawesome/free-solid-svg-icons';

import { Sidebar, SidebarBrand, SidebarLink } from '../components';
import { loadFonts } from '../utils';

const CustomApp = ({ Component, pageProps }) => {
  useEffect(() => {
    loadFonts();

    return function() {
      document.documentElement.classList.remove('roboto', 'montserrat');
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
        <meta name="keywords" content="coronavirus,covid-19,covid19,dashboard,data,analytics" />
      </Head>

      <Sidebar>
        <SidebarLink title="World Summary" icon={faChartLine} href="/" />
        <SidebarLink title="Filter by Country" icon={faGlobeAmericas} href="/countries" />
        <SidebarLink title="Stay Safe!" icon={faBandAid} href="/safety" />
      </Sidebar>

      <main className="main">
        <Component {...pageProps} />
      </main>
    </div>
  );
};

export default CustomApp;
