import { Sidebar } from '../Sidebar/Sidebar';

export const Layout = ({ children }) => (
  <div className="app-wrapper" style={{ height: '100vh', padding: 20 }}>
    <div className="row with-full-height" style={{ marginRight: 0 }}>
      <div className="col-md-1 col-xs-12 with-full-height sidebar">
        <Sidebar />
      </div>

      <div className="col-md-11 with-full-height" style={{ paddingRight: 0 }}>
        {children}
      </div>
    </div>
  </div>
);
