import { useState, useEffect } from 'react';

import { Container, CardContainer, Card, Stats } from '../components';
import { api, buildAreaChartSeries } from '../utils';
import { getMessage } from '../lang';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const IndexPage = props => {
  const [summary, setSummary] = useState(null);
  const [dailySummarySeries, setDailySummarySeries] = useState([]);

  useEffect(() => {
    async function fetchSummary() {
      try {
        const summary = await api.get('/');
        setSummary(summary.data);

        const dailySummary = await api.get('/daily');
        const summarySeries = buildAreaChartSeries(dailySummary.data, props.lang);
        setDailySummarySeries(summarySeries);
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchSummary();
  }, []);

  return (
    <>
      {summary ? (
        <Container>
          <h1>{getMessage('INDEX_PAGE_TITLE', props.lang)}</h1>

          <Stats
            confirmed={summary.confirmed.value}
            deaths={summary.deaths.value}
            recovered={summary.recovered.value}
            series={dailySummarySeries}
            lang={props.lang}
          />
        </Container>
      ) : (
        <Container>
          <Card content>
            <p><FontAwesomeIcon icon={faSpinner} spin /> {getMessage('LOADING', props.lang)}</p>
          </Card>
        </Container>
      )}
    </>
  );
};

export default IndexPage;
