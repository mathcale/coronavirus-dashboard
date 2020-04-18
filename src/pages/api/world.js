import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 405;

    res.end(JSON.stringify({ message: 'Method Not Allowed!' }))
  }

  const endpoint = process.env.COVID19_DASH_NOVEL_ENDPOINT;

  const responseToday = await fetch(`${endpoint}/v2/all`);
  const today = await responseToday.json();

  const responseYesterday = await fetch(`${endpoint}/v2/all?yesterday=true`);
  const yesterday = await responseYesterday.json();

  const responseHistory = await fetch(`${endpoint}/v2/historical/all?lastdays=30`);
  const history = await responseHistory.json();

  const responseCountries = await fetch(`${endpoint}/v2/countries?sort=cases`);
  const countries = await responseCountries.json();

  const data = {
    today,
    yesterday,
    history,
    countries,
  };

  res.status(200).json(JSON.stringify(data));
};
