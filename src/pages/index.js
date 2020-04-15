import dynamic from 'next/dynamic';
import fetch from 'isomorphic-unfetch';

import { Card } from '../components';
import { buildAreaChartSeries } from '../utils';

const Chart = dynamic(
  () => import('../components/Chart/Chart'),
  { ssr: false },
);

const IndexPage = ({ worldData }) => (
  <div className="row">
    <div className="col-md-9">
      <div className="row">
        <div className="col-md-3">
          <Card>
            <div className="row" style={{ margin: '0px' }}>
              <div className="col-md-7">
                <h4 className="stats--title">Casos Confirmados</h4>
                <p className="stats--counter">{Number(worldData.today.cases).toLocaleString()}</p>
              </div>

              <div className="col-md-5">
                {worldData.history &&
                  <Chart color="#46467F" series={buildAreaChartSeries(worldData.history.cases)} />
                }
              </div>
            </div>
          </Card>
        </div>

        <div className="col-md-3">
          <Card>
            <div className="row" style={{ margin: '0px' }}>
              <div className="col-md-7">
                <h4 className="stats--title">Recuperados</h4>
                <p className="stats--counter">{Number(worldData.today.recovered).toLocaleString()}</p>
              </div>

              <div className="col-md-5">
                {worldData.history &&
                  <Chart color="#27AD60" series={buildAreaChartSeries(worldData.history.recovered)} />
                }
              </div>
            </div>
          </Card>
        </div>

        <div className="col-md-3">
          <Card>
            <div className="row" style={{ margin: '0px' }}>
              <div className="col-md-7">
                <h4 className="stats--title">Total de Mortes</h4>
                <p className="stats--counter">{Number(worldData.today.deaths).toLocaleString()}</p>
              </div>

              <div className="col-md-5">
                {worldData.history &&
                  <Chart color="#f96e64" series={buildAreaChartSeries(worldData.history.deaths)} />
                }
              </div>
            </div>
          </Card>
        </div>

        <div className="col-md-3">
          <Card>
            <h4 className="stats--title">Casos Ativos</h4>
            <p className="stats--counter">{Number(worldData.today.active).toLocaleString()}</p>
          </Card>
        </div>
      </div>
    </div>

    <div className="col-md-3">Side</div>
  </div>
);

export async function getServerSideProps(context) {
  const dev = process.env.NODE_ENV !== 'production';
  const endpoint = dev ? 'http://localhost:3000' : 'https://covid19.matheus.me'

  const response = await fetch(`${endpoint}/api/world`);
  const worldData = await response.json();

  return {
    props: {
      worldData,
    },
  }
}

export default IndexPage;
