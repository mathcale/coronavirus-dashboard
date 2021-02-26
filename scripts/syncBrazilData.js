const faunadb = require('faunadb');
const fetch = require('isomorphic-unfetch');
const wait = require('waait');

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.COVID19_DASH_FAUNADB_SECRET,
});

const apiEndpoint = process.env.COVID19_DASH_BRAZIL_ENDPOINT;
const apiToken =  process.env.COVID19_DASH_BRAZILIO_TOKEN;
const documentRefId = process.env.COVID19_DASH_FAUNADB_DOCUMENT_REF_ID;

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

    console.log('Waiting 10 secs...');
    await wait(10000);

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

    console.log(`Starting to fetch ${totalPagesTodayCases} pages...`);

    for (let page = 2; page <= totalPagesTodayCases; page++) {
      console.log('Waiting 10 secs...');
      await wait(10000);

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

    await client.query(
      q.Replace(
        q.Ref(q.Collection('summaries'), documentRefId),
        { data },
      )
    );

    console.info('Sync completed!');
    process.exit(0);
  } catch (err) {
    console.error(`ERROR: ${err.message}`);
    process.exit(1);
  }
})();
