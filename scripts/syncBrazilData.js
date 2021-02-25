const faunadb = require('faunadb');
const fetch = require('isomorphic-unfetch').default();
const wait = require('waait');

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.COVID19_DASH_FAUNADB_SECRET,
});

const apiEndpoint = process.env.COVID19_DASH_BRAZIL_ENDPOINT;
const apiToken =  process.env.COVID19_DASH_BRAZILIO_TOKEN;

(async () => {
  try {
    console.log('Fetching latest states\' data...');

    const responseBrazilLatestStates = await fetch(`${apiEndpoint}?is_last=True&place_type=state&format=json`, {
      headers: {
        Authorization: `Token ${apiToken}`,
        'Accept': 'application/json',
      }
    });

    const brazilLatestStates = await responseBrazilLatestStates.json();

    console.log('Waiting 2 secs...');
    await wait(2000);

    console.log('Fetching latest data from Brazil...');

    const responseBrazilTodayCases = await fetch(`${apiEndpoint}?is_last=True&place_type=city&format=json`, {
      headers: {
        Authorization: `Token ${apiToken}`,
        'Accept': 'application/json',
      }
    });

    const brazilTodayCases = await responseBrazilTodayCases.json();

    const totalPagesTodayCases = Math.ceil(brazilTodayCases.count / 1000);
    const todayCases = [
      ...brazilTodayCases.results,
    ];

    for (let page = 2; page <= totalPagesTodayCases; page++) {
      console.log('Waiting 2 secs...');
      await wait(2000);

      console.log(`Fetching page ${page}...`);
      const responseBrazilTodayCasesNext = await fetch(`${apiEndpoint}?is_last=True&place_type=city&&page=${page}&format=json`);
      const brazilTodayCasesNext = await responseBrazilTodayCasesNext.json();

      todayCases.push(brazilTodayCasesNext.results);
    }

    let biggestConfirmedFound = 0;
    let mostAffectedState = '';

    const summary = brazilLatestStates.results.reduce(
      (acc, curr) => {
        if (curr.confirmed > biggestConfirmedFound) {
          biggestConfirmedFound = curr.confirmed;
          mostAffectedState = curr.state;
        } else {
          mostAffectedState = acc.mostAffectedState;
        }

        return {
          confirmed: acc.confirmed + curr.confirmed,
          deaths: acc.deaths + curr.deaths,
          mostAffectedState,
        }
      },
      { confirmed: 0, deaths: 0, mostAffectedState: '' },
    );

    const data = {
      summary,
      todayCases,
      states: brazilLatestStates.results,
    };

    console.log('Saving data on database...');

    const result = await client.query(
      q.Create(
        q.Collection('summaries'),
        { data },
      )
    );

    this.res.status(201).json({ result });
  } catch (err) {
    this.res.status(500).json({
      message: err.message,
    });
  }
})();
