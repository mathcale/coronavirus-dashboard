import { useState, useEffect } from 'react';
import flag from 'country-code-emoji';
import axios from 'axios';

import { Container, CardContainer, CountrySummaryContainer, Card, Form, Alert, Stats, Loading } from '../components';
import { apiAlternate, countries, buildCountryAreaChartSeries } from '../utils';
import { getMessage } from '../lang';

const CountriesPage = props => {
  const [countryName, setCountryName] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [countrySummary, setCountrySummary] = useState(null);
  const [countrySeries, setCountrySeries] = useState([])
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {}, [countrySummary]);

  function getCountryNameByCode(countryCode) {
    return Object.keys(countries).filter(country => countries[country] === countryCode)[0];
  }

  async function fetchCountryDetails(e) {
    e.preventDefault();

    if (countryCode === '') {
      alert(getMessage('ERROR_REQUIRED_COUNTRY', props.lang));
      return false;
    }

    setIsLoading(true);
    setCountrySummary(null);
    setCountryName('');
    setError(null);

    try {
      const summary = await axios.get(`/api/country?code=${countryCode}`);

      setCountrySummary(summary.data);
      setCountryName(getCountryNameByCode(countryCode));
      setCountrySeries(buildCountryAreaChartSeries(summary.data.locations[0].timelines, props.lang));
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <h1>{getMessage('COUNTRIES_PAGE_TITLE', props.lang)}</h1>

      <CardContainer size="1">
        <Card content>
          <Form>
            <div className="form-control">
              <label>{getMessage('SELECT_COUNTRY', props.lang)}</label>
              <select defaultValue="XX" onChange={e => setCountryCode(e.target.value)}>
                <option value="XX" disabled>{getMessage('SELECT_ONE', props.lang)}</option>

                {Object.keys(countries).map((countryName, i) => (
                  <option key={i} value={countries[countryName]}>{countryName}</option>
                ))}
              </select>
            </div>

            <button type="button" onClick={fetchCountryDetails}>{getMessage('SEARCH_BUTTON_TITLE', props.lang)}</button>
          </Form>
        </Card>
      </CardContainer>

      {isLoading && <Loading lang={props.lang} />}

      {error ? (
        <Alert danger>
          <p>{error}</p>
        </Alert>
      ) : (
        countrySummary && (
          <CountrySummaryContainer>
            <h2 dangerouslySetInnerHTML={{__html: getMessage('SEARCH_RESULT_TITLE', props.lang, flag(countryCode), countryName)}} />

            <Stats
              confirmed={countrySummary.latest.confirmed}
              deaths={countrySummary.latest.deaths}
              recovered={countrySummary.latest.recovered}
              series={countrySeries}
              lang={props.lang}
            />
          </CountrySummaryContainer>
        )
      )}
    </Container>
  );
};

export default CountriesPage;
