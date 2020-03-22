import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'

import { Container, CardContainer, Card } from '../components';
import { api, buildAreaChartSeries } from '../utils';
import { getMessage } from '../lang';

const Chart = dynamic(
  () => import('../components/Chart/Chart'),
  { ssr: false },
);

const IndexPage = props => {
  const [summary, setSummary] = useState(null);
  const [dailySummarySeries, setDailySummarySeries] = useState([]);

  useEffect(() => {
    async function fetchSummary() {
      try {
        const summary = await api.get('/');
        setSummary(summary.data);

        const dailySummary = await api.get('/daily');
        const summarySeries = buildAreaChartSeries(dailySummary.data);
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

          <CardContainer size="3">
            <Card default title={getMessage('CONFIRMED_CARD_TITLE', props.lang)} count={summary.confirmed.value} />
            <Card danger title={getMessage('DEATHS_CARD_TITLE', props.lang)} count={summary.deaths.value} />
            <Card default title={getMessage('RECOVERED_CARD_TITLE', props.lang)} count={summary.recovered.value} />
          </CardContainer>

          <CardContainer size="1">
            <Card chart>
              <Chart
                options={{
                  xaxis: { type: 'datetime' },
                  theme: { mode: 'dark', palette: 'palette1' },
                  chart: {
                    background: '#1c3146',
                    toolbar: { show: false },
                    animations: {
                      animateGradually: { enabled: false },
                      dynamicAnimation: { enabled: false },
                    },
                  },
                  grid: { show: false },
                  stroke: { curve: 'smooth' },
                  dataLabels: { enabled: false },
                  markers: { size: 5 },
                }}
                series={dailySummarySeries}
                type="area"
                height="500"
              />
            </Card>
          </CardContainer>
        </Container>
      ) : (
        <p>{getMessage('LOADING', props.lang)}</p>
      )}
    </>
  );
};

export default IndexPage;
