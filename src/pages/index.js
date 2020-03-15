import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'

import { Container, CardContainer, Card } from '../components';
import { api, buildAreaChartSeries } from '../utils';

const Chart = dynamic(
  () => import('../components/Chart/Chart'),
  { ssr: false },
);

const IndexPage = () => {
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
          <h1>World Summary</h1>

          <CardContainer>
            <Card default title="Confirmed" count={summary.confirmed.value} />
            <Card danger title="Deaths" count={summary.deaths.value} />
            <Card default title="Recovered" count={summary.recovered.value} />
          </CardContainer>

          <CardContainer size="2">
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
        <p>Loading</p>
      )}
    </>
  );
};

export default IndexPage;
