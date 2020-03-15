export const buildAreaChartSeries = data => {
  const totalConfirmedData = data.map(report => ({
    x: report.reportDate,
    y: report.totalConfirmed,
  }));

  const totalRecoveredData = data.map(report => ({
    x: report.reportDate,
    y: report.totalRecovered,
  }));

  return [
    { name: 'Total Confirmed', data: totalConfirmedData },
    { name: 'Total Recovered', data: totalRecoveredData },
  ];
};
