import Chart from 'react-apexcharts';

const MyChart = props => (
  <Chart
    options={{
      xaxis: { type: 'datetime', show: false },
      yaxis: { show: false },
      tooltip: {
        x: { show: false },
        y: {
          title: {
            formatter: value => null,
          },
          formatter: value => Number(value).toLocaleString(),
        }
      },
      theme: { mode: 'light', palette: 'palette1' },
      colors: [props.color],
      chart: {
        background: '#ffffff',
        toolbar: { show: false },
        animations: {
          animateGradually: { enabled: false },
          dynamicAnimation: { enabled: false },
        },
        sparkline: { enabled: true },
      },
      grid: { show: false },
      stroke: { curve: 'smooth' },
      dataLabels: { enabled: false },
      markers: { size: 0 },
    }}
    series={props.series}
    type="area"
    width="100%"
    height="80px"
  />
);

export default MyChart;
