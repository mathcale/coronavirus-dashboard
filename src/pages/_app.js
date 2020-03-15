import { useEffect } from 'react';

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
      <Sidebar>
        <SidebarLink title="Summary" href="/" />
        {/* <SidebarLink title="Countries" href="/countries" />
        <SidebarLink title="About the Virus" href="/about" /> */}
      </Sidebar>

      <main className="main">
        <Component {...pageProps} />
      </main>
    </div>
  );
};

export default CustomApp;
