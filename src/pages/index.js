import dynamic from 'next/dynamic';
import fetch from 'isomorphic-unfetch';

import { Card, CardFOV, CountrySummaryCard, SummaryItem, Button } from '../components';
import { buildAreaChartSeries } from '../utils';
import Link from 'next/link';

import brazil from '../../public/img/brazil.png';
import donate from '../../public/img/donate.png';
import wpp from '../../public/img/whatsapp.svg';
import fb from '../../public/img/facebook.svg';
import tt from '../../public/img/twitter.svg';

const Chart = dynamic(
  () => import('../components/Chart/Chart'),
  { ssr: false },
);

const WorldMap = dynamic(
  () => import('../components/Maps/WorldMap'),
  { ssr: false },
);

const IndexPage = ({ worldData }) => {
  const topCountries = worldData.countries.slice(0, 3);
  const mapData = {};

  worldData.countries.forEach(country => {
    mapData[country.countryInfo.iso2] = country.cases;
  });

  return (
    <div className="row index-page">
      <div className="col-md-9 col-xs-12 main-column" style={{ height: '100%' }}>
        <div className="row">
          <div className="col-md-3 col-xs-12">
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

          <div className="col-md-3 col-xs-12">
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

          <div className="col-md-3 col-xs-12">
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

          <div className="col-md-3 col-xs-12">
            <Card fullHeight centerJustified>
              <h4 className="stats--title">Compartilhar</h4>
              <p className="stats--share">
                <a href={`https://wa.me/?text=Acompanhe%20os%20n%C3%BAmeros%20e%20estat%C3%ADsticas%20do%20COVID-19%20no%20Brasil%20e%20no%20Mundo%20no%20site%20https%3A%2F%2Fcovid19.matheus.me%0A%0A%F0%9F%98%B7%20%2ACasos%20no%20Mundo%3A%2A%20${worldData.today.cases}%0A%F0%9F%92%80%20%2AMortes%20no%20Mundo%3A%2A%20${worldData.today.deaths}%0A%0A%2A%23FiqueEmCasa%2A`} target="_blank">
                  <img src={wpp} alt="WhatsApp" style={{ width: '32px' }} />
                </a>

                <a href={`https://www.facebook.com/dialog/share?app_id=${process.env.COVID19_DASH_FB_APP_ID}&href=https://covid19.matheus.me&quote=Acompanhe%20os%20n%C3%BAmeros%20e%20estat%C3%ADsticas%20do%20COVID-19%20no%20Brasil%20e%20no%20Mundo%20no%20site%20https%3A%2F%2Fcovid19.matheus.me%0A%0A%F0%9F%98%B7%20Casos%20no%20Mundo%3A%20${worldData.today.cases}%0A%F0%9F%92%80%20Mortes%20no%20Mundo%3A%20${worldData.today.deaths}%0A%0A%23FiqueEmCasa`} target="_blank">
                  <img src={fb} alt="Facebook" style={{ width: '32px' }} />
                </a>

                <a href={`https://twitter.com/intent/tweet?text=Acompanhe%20os%20n%C3%BAmeros%20e%20estat%C3%ADsticas%20do%20COVID-19%20no%20Brasil%20e%20no%20Mundo%20no%20site%20https%3A%2F%2Fcovid19.matheus.me%0A%0A%F0%9F%98%B7%20Casos%20no%20Mundo%3A%20${worldData.today.cases}%0A%F0%9F%92%80%20Mortes%20no%20Mundo%3A%20${worldData.today.deaths}%0A%0A%23FiqueEmCasa`} target="_blank">
                  <img src={tt} alt="Twitter" style={{ width: '32px' }} />
                </a>
              </p>
            </Card>
          </div>
        </div>

        <div className="row with-top-spacing">
          <div className="col-md-12">
            <Card>
              <div className="row">
                <div className="col-md-8 col-xs-12">
                  <h2 style={{ marginBottom: 20 }}>Áreas Afetadas</h2>

                  <WorldMap data={mapData} />
                </div>

                <div className="col-md-4 col-xs-12 with-responsive-top-spacing">
                  <h2 style={{ marginBottom: 20 }}>Mais Afetados</h2>

                  {topCountries.map((country, i) => (
                    <CountrySummaryCard
                      name={country.country}
                      flag={country.countryInfo.flag}
                      cases={country.cases}
                      deaths={country.deaths}
                      recovered={country.recovered}
                      key={i}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="row with-top-spacing">
          <div className="col-md-6">
            <Card cta>
              <div className="row cta">
                <div className="col-md-4">
                  <img src={brazil} className="cta--image" />
                </div>

                <div className="col-md-8" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h2 style={{ marginBottom: 10 }}>Situação do Brasil</h2>
                  <p style={{ marginBottom: 15 }}>Acompanhe também os casos do vírus por todo o Brasil</p>

                  <Link href="/brazil" passHref>
                    <Button>Acompanhar</Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-md-6">
            <Card cta>
              <div className="row cta">
                <div className="col-md-4">
                  <img src={donate} className="cta--image" />
                </div>

                <div className="col-md-8" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h2 style={{ marginBottom: 10 }}>Faça o Bem</h2>
                  <p style={{ marginBottom: 15 }}>Saiba como você pode contribuir com as pessoas mais afetadas pela pandemia</p>

                  {/* <Link href="/donate" passHref> */}
                    <Button disabled>Em Breve</Button>
                  {/* </Link> */}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-xs-12 summary-column">
        <Card fullHeight>
          <h2 style={{ marginBottom: 5 }}>Resumo por País</h2>
          <p className="summary-column--notice">Ordenado por nº de casos confirmados</p>

          <div className="world-summary">
            {worldData.countries.map((country, i) => (
              <SummaryItem
                name={country.country}
                cases={country.cases}
                deaths={country.deaths}
                flag={country.countryInfo.flag}
                key={i}
              />
            ))}
          </div>
        </Card>

        <CardFOV />
      </div>
    </div>
  )
}

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
