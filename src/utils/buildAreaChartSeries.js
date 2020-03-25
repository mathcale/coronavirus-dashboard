import { getMessage } from '../lang';

export const buildAreaChartSeries = (data, lang) => {
  const totalConfirmedData = data.map(report => ({
    x: report.reportDate,
    y: report.confirmed.total,
  }));

  const totalDeathsData = data.map(report => ({
    x: report.reportDate,
    y: report.deaths.total,
  }));

  // const totalRecoveredData = data.map(report => ({
  //   x: report.reportDate,
  //   y: report.recovered.total,
  // }));

  return [
    { name: getMessage('TOTAL_CONFIRMED', lang), data: totalConfirmedData },
    { name: getMessage('TOTAL_DEATHS', lang), data: totalDeathsData },
    // { name: getMessage('TOTAL_RECOVERED', lang), data: totalRecoveredData },
  ];
};
