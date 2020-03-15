import { useState, useEffect } from 'react';

import { Container, CardContainer, CountrySummaryContainer, Card, Form, Alert } from '../components';
import { api, countries } from '../utils';

const CountriesPage = () => {
  const [countryName, setCountryName] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [countrySummary, setCountrySummary] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {}, [countrySummary, error]);

  function getCountryNameByCode(countryCode) {
    return Object.keys(countries).filter(country => countries[country] === countryCode)[0];
  }

  async function fetchCountryDetails(e) {
    e.preventDefault();

    if (countryCode === '') {
      alert('You must select a country!');
      return false;
    }

    setCountrySummary(null);
    setCountryName('');
    setError(null);

    try {
      const summary = await api.get(`/countries/${countryCode}`);

      setCountrySummary(summary.data);
      setCountryName(getCountryNameByCode(countryCode));
    } catch (err) {
      console.error(`API responded with status code ${err.response.status} and message: ${err.response.data.error.message}`);

      if (err.response.status >= 500) {
        setError('Unexpected error from data source! Please try again later.');
      } else {
        setError(err.response.data.error.message);
      }
    }
  }

  return (
    <Container>
      <h1>Country Statistics</h1>

      <CardContainer size="1">
        <Card content>
          <Form>
            <div className="form-control">
              <label>Select a Country:</label>
              <select defaultValue="XX" onChange={e => setCountryCode(e.target.value)}>
                <option value="XX" disabled>Select one</option>

                {Object.keys(countries).map((countryName, i) => (
                  <option key={i} value={countries[countryName]}>{countryName}</option>
                ))}
              </select>
            </div>

            <button type="button" onClick={fetchCountryDetails}>Search</button>
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
            <h2>Search result for <span>{countryName}:</span></h2>

            <CardContainer size="3">
              <Card default title="Confirmed" count={countrySummary.confirmed.value} />
              <Card danger title="Deaths" count={countrySummary.deaths.value} />
              <Card default title="Recovered" count={countrySummary.recovered.value} />
            </CardContainer>
          </CountrySummaryContainer>
        )
      )}
    </Container>
  );
};

export default CountriesPage;
