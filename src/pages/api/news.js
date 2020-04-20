import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 405;

    res.end(JSON.stringify({ message: 'Method Not Allowed!' }))
  }

  const endpoint = process.env.COVID19_DASH_NEWS_ENDPOINT;

  const responseNews = await fetch(endpoint);
  const news = await responseNews.json();

  res.status(200).json(JSON.stringify(news));
};
