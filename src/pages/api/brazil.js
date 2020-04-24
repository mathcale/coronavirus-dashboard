import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 405;

    res.end(JSON.stringify({ message: 'Method Not Allowed!' }));
  }

  const endpoint = process.env.COVID19_DASH_BRAZIL_ENDPOINT;

  const responseBrazilLatestStates = await fetch(`${endpoint}?is_last=True&place_type=state&format=json`);
  const brazilLatestStates = await responseBrazilLatestStates.json();

  const responseBrazilTodayCases = await fetch(`${endpoint}?is_last=True&format=json`);
  const brazilTodayCases = await responseBrazilTodayCases.json();

  const totalPagesTodayCases = Math.ceil(brazilTodayCases.count / 1000);
  const todayCases = [
    ...brazilTodayCases.results,
  ];

  for (let page = 2; page <= totalPagesTodayCases; page++) {
    const responseBrazilTodayCasesNext = await fetch(`${endpoint}?is_last=True&page=${page}&format=json`);
    const brazilTodayCasesNext = await responseBrazilTodayCasesNext.json();

    todayCases.push(brazilTodayCasesNext.results);
  }

  const summary = brazilLatestStates.results.reduce(
    (acc, curr) => ({
      confirmed: acc.confirmed + curr.confirmed,
      deaths: acc.deaths + curr.deaths,
    }),
    { confirmed: 0, deaths: 0 },
  );

  const data = {
    summary,
    todayCases,
    states: brazilLatestStates.results,
  }

  res.status(200).json(JSON.stringify(data));
};
