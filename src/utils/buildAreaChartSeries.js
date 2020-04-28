export const buildAreaChartSeries = data => {
  const series = Object.keys(data).map(reportDate => ({
    x: reportDate,
    y: data[reportDate],
  }));

  return [
    { data: series },
  ];
};
