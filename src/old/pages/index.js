import { useState, useEffect } from 'react';

import { Container, CardContainer, Card, Stats, Loading } from '../components';
import { api, buildAreaChartSeries } from '../utils';
import { getMessage } from '../lang';

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
    <Container>
      <h1>{getMessage('INDEX_PAGE_TITLE', props.lang)}</h1>

      {summary ? (
        <Stats
          confirmed={summary.confirmed.value}
          deaths={summary.deaths.value}
          recovered={summary.recovered.value}
          series={dailySummarySeries}
          lang={props.lang}
        />
      ) : (
        <Loading lang={props.lang} />
      )}
    </Container>
  );
};

export default IndexPage;
