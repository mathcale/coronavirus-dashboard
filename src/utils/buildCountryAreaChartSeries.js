import { getMessage } from '../lang';

export const buildCountryAreaChartSeries = (data, lang) => {
  const totalConfirmedData = Object.keys(data.confirmed.timeline).map(key => ({
    x: key,
    y: data.confirmed.timeline[key],
  }));

  const totalDeathsData = Object.keys(data.deaths.timeline).map(key => ({
    x: key,
    y: data.deaths.timeline[key],
  }));

  // const totalRecoveredData = Object.keys(data.recovered.timeline).map(key => ({
  //   x: key,
  //   y: data.recovered.timeline[key],
  // }));

  return [
    { name: getMessage('TOTAL_CONFIRMED', lang), data: totalConfirmedData },
    { name: getMessage('TOTAL_DEATHS', lang), data: totalDeathsData },
    // { name: getMessage('TOTAL_RECOVERED', lang), data: totalRecoveredData },
  ];
};
