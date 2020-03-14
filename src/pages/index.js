import { useState, useEffect } from 'react';
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
        <div>
          <p>Confirmed: {summary.confirmed.value}</p>
          <p>Deaths: {summary.deaths.value}</p>
          <p>Recovered: {summary.recovered.value}</p>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default IndexPage;
