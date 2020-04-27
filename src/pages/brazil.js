import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import { Card, CardFOV, Button, SummaryItem, StateSummaryCard, ButtonGroup } from '../components';
import { brazilianStates } from '../utils';

import world from '../../public/img/world.png';
import donate from '../../public/img/donate.png';
import wpp from '../../public/img/whatsapp.svg';
import fb from '../../public/img/facebook.svg';
import tt from '../../public/img/twitter.svg';

const BrazilMap = dynamic(
  () => import('../components/Maps/BrazilMap'),
  { ssr: false },
);

const chunkArray = (array, chunk_size) =>
  Array(Math.ceil(array.length / chunk_size))
    // @ts-ignore
    .fill()
    .map((_, index) => index * chunk_size)
    .map(begin => array.slice(begin, begin + chunk_size));

const BrazilPage = ({ brazil }) => {
  const [city, setCity] = useState('');
  const [filteredCases, setFilteredCases] = useState([]);
  const [paginatedStates, _] = useState(chunkArray(brazil.states, 3));
  const [currentStatesPage, setCurrentStatesPage] = useState(0);

  const moveStatesPageBack = () => {
    if (currentStatesPage === 0)
      return false;

    setCurrentStatesPage(currentStatesPage - 1);
  };

  const moveStatesPageForward = () => {
    if (currentStatesPage === paginatedStates.length - 1)
      return false;

    setCurrentStatesPage(currentStatesPage + 1);
  };

  useEffect(() => {
    if (city !== '') {
      const filtered = brazil.todayCases.filter(c => c.city && c.city.includes(city));
      setFilteredCases(filtered);
    } else {
      setFilteredCases(brazil.todayCases);
    }
  }, [city]);

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

          <div className="col-md-3 col-xs-12">
            <Card>
              <div className="row" style={{ margin: '0px' }}>
                <div className="col-md-7">
                  <h4 className="stats--title">Estado Mais Afetado</h4>
                  <p className="stats--counter">{brazilianStates[brazil.summary.mostAffectedState]}</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-md-3 col-xs-12">
            <Card>
              <div className="row" style={{ margin: '0px' }}>
                <div className="col-md-12">
                  <h4 className="stats--title">Compartilhar</h4>
                  <p className="stats--share">
                    <a href={`https://wa.me/?text=Acompanhe%20os%20n%C3%BAmeros%20e%20estat%C3%ADsticas%20do%20COVID-19%20no%20Brasil%20e%20no%20Mundo%20no%20site%20https%3A%2F%2Fcovid19.matheus.me%0A%0A%F0%9F%98%B7%20%2ACasos%20no%20Brasil%3A%2A%20${brazil.summary.confirmed}%0A%F0%9F%92%80%20%2AMortes%20no%20Brasil%3A%2A%20${brazil.summary.deaths}%0A%0A%2A%23FiqueEmCasa%2A`} target="_blank">
                      <img src={wpp} alt="WhatsApp" style={{ width: '32px' }} />
                    </a>

                    <a href={`https://www.facebook.com/dialog/share?app_id=${process.env.COVID19_DASH_FB_APP_ID}&href=https://covid19.matheus.me&quote=Acompanhe%20os%20n%C3%BAmeros%20e%20estat%C3%ADsticas%20do%20COVID-19%20no%20Brasil%20e%20no%20Mundo%20no%20site%20https%3A%2F%2Fcovid19.matheus.me%0A%0A%F0%9F%98%B7%20Casos%20no%20Brasil%3A%20${brazil.summary.confirmed}%0A%F0%9F%92%80%20Mortes%20no%20Brasil%3A%20${brazil.summary.deaths}%0A%0A%23FiqueEmCasa`} target="_blank">
                      <img src={fb} alt="Facebook" style={{ width: '32px' }} />
                    </a>

                    <a href={`https://twitter.com/intent/tweet?text=Acompanhe%20os%20n%C3%BAmeros%20e%20estat%C3%ADsticas%20do%20COVID-19%20no%20Brasil%20e%20no%20Mundo%20no%20site%20https%3A%2F%2Fcovid19.matheus.me%0A%0A%F0%9F%98%B7%20Casos%20no%20Brasil%3A%20${brazil.summary.confirmed}%0A%F0%9F%92%80%20Mortes%20no%20Brasil%3A%20${brazil.summary.deaths}%0A%0A%23FiqueEmCasa`} target="_blank">
                      <img src={tt} alt="Twitter" style={{ width: '32px' }} />
                    </a>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="row with-top-spacing">
          <div className="col-md-12">
            <Card>
              <div className="row">
                <div className="col-md-8 col-xs-12">
                  <h2 style={{ marginBottom: 20 }}>Estados Afetados</h2>

                  <BrazilMap geography={brazil.map} data={brazil.states} />
                </div>

                <div className="col-md-4 col-xs-12 with-responsive-top-spacing">
                  <h2 style={{ marginBottom: 20 }}>Mais Afetados</h2>

                  {paginatedStates[currentStatesPage].map((state, i) => (
                    <StateSummaryCard
                      name={brazilianStates[state.state]}
                      cases={state.confirmed}
                      deaths={state.deaths}
                      key={i}
                    />
                  ))}

                  <ButtonGroup>
                    <Button small type="button" onClick={moveStatesPageBack}>&lt;</Button>
                    <Button small type="button" onClick={moveStatesPageForward}>&gt;</Button>
                  </ButtonGroup>
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
                  <img src={world} className="cta--image" />
                </div>

                <div className="col-md-8" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h2 style={{ marginBottom: 10 }}>Situação do Mundo</h2>
                  <p style={{ marginBottom: 15 }}>Acompanhe também os casos do vírus por todo o mundo</p>

                  <Link href="/" passHref>
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
          <h2 style={{ marginBottom: 5 }}>Casos Confirmados por Município</h2>
          <p className="summary-column--notice">Ordenado por estado</p>

          <input
            type="text"
            placeholder="Digite o nome de uma cidade"
            value={city}
            onChange={e => setCity(e.target.value)}
          />

          <div className="world-summary">
            {filteredCases.map((city, i) => (
              <SummaryItem
                name={`${city.city} - ${city.state}`}
                cases={city.confirmed}
                deaths={city.deaths}
                key={i}
              />
            ))}
          </div>
        </Card>

        <CardFOV />
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
