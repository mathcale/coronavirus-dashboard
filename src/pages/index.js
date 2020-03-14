import { useState, useEffect } from 'react';
import { Container, CardContainer, Card } from '../components';
import { api } from '../utils';

const IndexPage = () => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    async function fetchSummary() {
      try {
        const data = await api.get('/');
        setSummary(data.data);
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
          <h1>Summary</h1>

          <CardContainer>
            <Card default title="Confirmed" count={summary.confirmed.value} />
            <Card danger title="Deaths" count={summary.deaths.value} />
            <Card default title="Recovered" count={summary.recovered.value} />
          </CardContainer>
        </Container>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default IndexPage;
