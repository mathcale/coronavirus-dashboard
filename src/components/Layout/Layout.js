import { Sidebar } from '../Sidebar/Sidebar';

export const Layout = ({ children }) => (
  <div className="app-wrapper">
    <div className="row app-row with-full-height">
      <div className="col-md-1 col-xs-12 with-full-height sidebar">
        <Sidebar />
      </div>

      <div className="col-md-11 col-xs-12 with-full-height main-container" style={{ paddingRight: 0 }}>
        {children}
      </div>
    </div>
  </div>
);
