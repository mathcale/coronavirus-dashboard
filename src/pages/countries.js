import { useState, useEffect } from 'react';
import flag from 'country-code-emoji';

import { Container, CardContainer, CountrySummaryContainer, Card, Form, Alert, Stats } from '../components';
import { apiAlternate, countries, buildCountryAreaChartSeries } from '../utils';
import { getMessage } from '../lang';

const CountriesPage = props => {
  const [countryName, setCountryName] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [countrySummary, setCountrySummary] = useState(null);
  const [countrySeries, setCountrySeries] = useState([])
  const [error, setError] = useState(null);

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

    setCountrySummary(null);
    setCountryName('');
    setError(null);

    try {
      const summary = await apiAlternate.get(`/locations?country_code=${countryCode}&timelines=1`);

      setCountrySummary(summary.data);
      setCountryName(getCountryNameByCode(countryCode));
      setCountrySeries(buildCountryAreaChartSeries(summary.data.locations[0].timelines, props.lang))
    } catch (err) {
      // console.error(`API responded with status code ${err.response.status} and message: ${err.response.data.error.message}`);

      // if (err.response.status >= 500) {
        // setError('Unexpected error from data source! Please try again later!');
      // } else {
        // setError(err.response.data.error.message);
        setError(err.message);
      // }
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
