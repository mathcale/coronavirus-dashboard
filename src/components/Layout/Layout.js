import { Sidebar } from '../Sidebar/Sidebar';

export const Layout = ({ children }) => (
  <div className="app-wrapper" style={{ height: '100vh', padding: 20 }}>
    <div className="row" style={{ height: '100%', marginRight: 0 }}>
      <div className="col-md-1" style={{ height: '100%', paddingLeft: '35px', paddingRight: '35px' }}>
        <Sidebar />
      </div>

      <div className="col-md-11" style={{ height: '100%', paddingRight: 0 }}>
        {children}
      </div>
    </div>
  </div>
);
