// @ts-ignore
import { VectorMap } from 'react-jvectormap';

const WorldMap = props => {
  return (
    <>
      <VectorMap
        map="world_mill"
        backgroundColor="#F9F3F3"
        containerClassName="world-map"
        zoomOnScroll={false}
        regionsSelectable={false}
        onRegionClick={() => null}
        containerStyle={{
          width: '100%',
          height: '340px',
        }}
        regionStyle={{
          initial: {
            fill: '#e4e4e4',
            'fill-opacity': 0.9,
            stroke: 'none',
            'stroke-width': 0,
            'stroke-opacity': 0,
          },
          hover: {
            'fill-opacity': 0.8,
            cursor: 'pointer',
          },
        }}
        series={{
          regions: [
            {
              values: props.data,
              scale: ['#FF8281', '#FC312E'],
              normalizeFunction: 'polynomial',
            }
          ]
        }}
      />
    </>
  )
}

export default WorldMap;
