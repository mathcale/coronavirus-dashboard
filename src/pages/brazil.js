import fetch from 'isomorphic-unfetch';

import { Card } from '../components';

const BrazilPage = ({ brazil }) => {
  return (
    <div className="row brazil-page">
      <div className="col-md-9 col-xs-12 main-column" style={{ height: '100%' }}>
        <div className="row">
          <div className="col-md-3 col-xs-12">
            <Card>
              <div className="row" style={{ margin: '0px' }}>
                <div className="col-md-7">
                  <h4 className="stats--title">Casos Confirmados</h4>
                  <p className="stats--counter">{brazil.summary.confirmed.toLocaleString()}</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-md-3 col-xs-12">
            <Card>
              <div className="row" style={{ margin: '0px' }}>
                <div className="col-md-7">
                  <h4 className="stats--title">Total de Mortes</h4>
                  <p className="stats--counter">{brazil.summary.deaths.toLocaleString()}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
};

export async function getServerSideProps(context) {
  const dev = process.env.NODE_ENV !== 'production';
  const endpoint = dev ? 'http://localhost:3000' : 'https://covid19.matheus.me'

  const response = await fetch(`${endpoint}/api/brazil`);
  const brazil = await response.json();

  return {
    props: {
      brazil,
    },
  }
}

export default BrazilPage;
