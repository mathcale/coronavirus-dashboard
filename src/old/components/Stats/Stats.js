import dynamic from 'next/dynamic';

import { CardContainer, Card } from '../';
import { getMessage } from '../../lang';

const Chart = dynamic(
  () => import('../Chart/Chart'),
  { ssr: false },
);

export const Stats = props => (
  <>
    <CardContainer size="3">
      <Card theme="warning" title={getMessage('CONFIRMED_CARD_TITLE', props.lang)} count={props.confirmed} />
      <Card theme="danger" title={getMessage('DEATHS_CARD_TITLE', props.lang)} count={props.deaths} />
      <Card theme="info" title={getMessage('RECOVERED_CARD_TITLE', props.lang)} count={props.recovered} />
    </CardContainer>

    <CardContainer size="1">
      <Card chart>
        <Chart
          options={{
            xaxis: { type: 'datetime' },
            theme: { mode: 'dark', palette: 'palette1' },
            colors: ['#FEB019', '#FF4560', '#00E396'],
            chart: {
              background: '#1c3146',
              toolbar: { show: false },
              animations: {
                animateGradually: { enabled: false },
                dynamicAnimation: { enabled: false },
              },
            },
            grid: { show: false },
            stroke: { curve: 'smooth' },
            dataLabels: { enabled: false },
            markers: { size: 0 },
          }}
          series={props.series}
          type="area"
          height="400"
        />

        <legend>{getMessage('NOTICE_NO_RECOVERED', props.lang)}</legend>
      </Card>
    </CardContainer>
  </>
);
