import faunadb from 'faunadb';

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.COVID19_DASH_FAUNADB_SECRET,
});

export default async (req, res) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 405;

    res.end(JSON.stringify({ message: 'Method Not Allowed!' }));
  }

  const result = await client.query(
    q.Get(
      q.Ref(q.Collection('summaries'),
      process.env.COVID19_DASH_FAUNADB_DOCUMENT_REF_ID),
    )
  );

  res.status(200).json(JSON.stringify(result.data));
};
