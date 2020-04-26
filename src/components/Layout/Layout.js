import { Sidebar } from '../Sidebar/Sidebar';

export const Layout = ({ children }) => (
  <div className="app-wrapper">
    <div className="row app-row with-full-height">
      <div className="col-md-1 col-xs-12 with-full-height sidebar">
        <Sidebar />
      </div>

      <div className="col-md-11 col-xs-12 with-full-height main-container" style={{ paddingRight: 0 }}>
        <>
          {children}

          <footer>
            <p>Fontes: Organização Mundial de Saúde, Ministério da Saúde do Brasil, Secretarias de Saúde.</p>
            <p>Desenvolvido com ❤️ (e álcool-gel) por <a href="https://matheus.me" target="_blank">Matheus Calegaro</a></p>
          </footer>
        </>
      </div>
    </div>
  </div>
);
