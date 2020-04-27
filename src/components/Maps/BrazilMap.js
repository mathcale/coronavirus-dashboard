import { useState, memo } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import ReactTooltip from 'react-tooltip'

import { MapLegend } from './MapLegend';

const colorScales = [
  { color: '#FFCDD2', range: [1, 24] },
  { color: '#EF9A9A', range: [25, 49] },
  { color: '#E57373', range: [50, 99] },
  { color: '#EF5350', range: [100, 199] },
  { color: '#F44336', range: [200, 499] },
  { color: '#E53935', range: [500, 999] },
  { color: '#D32F2F', range: [1000, 1499] },
  { color: '#C62828', range: [1500, 2999] },
  { color: '#B71C1C', range: [3000, 100000] },
];

const getFill = qty => {
  const scaleObj = colorScales.find(c => qty >= c.range[0] && qty <= c.range[1]);
  return scaleObj ? scaleObj.color : false;
};

const buildTooltipText = (state, confirmed, deaths) => `
<strong>${state}</strong><br />
<ul>
  <li>Casos: ${confirmed}</li>
  <li>Mortes: ${deaths}</li>
</ul>
`;

const BrazilMap = ({ geography, data }) => {
  const [tooltipText, setTooltipText] = useState('');

  return (
    <>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 450 }}
        height={350}
        style={{
          width: '100%',
          height: 'auto',
          backgroundColor: '#F9F3F3',
          borderRadius: '10px',
        }}
        data-tip=""
      >
        <ZoomableGroup center={[-53, -15]}>
          <Geographies geography={geography}>
            {({ geographies }) =>
              geographies.map(geo => {
                const current = data.find(state => state.city_ibge_code === geo.properties.CD_GEOCUF);
                const { NM_ESTADO: stateName } = geo.properties;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    state-name={stateName}
                    onMouseEnter={() => {
                      setTooltipText(buildTooltipText(stateName, current.confirmed, current.deaths))
                    }}
                    onMouseLeave={() => setTooltipText('')}
                    style={{
                      default: {
                        fill: getFill(current.confirmed) || '#e4e4e4',
                        stroke: '#F9F3F3',
                        strokeWidth: 0.75,
                        outline: 'none',
                      },
                      hover: {
                        fill: getFill(current.confirmed) || '#e4e4e4',
                        stroke: '#F9F3F3',
                        strokeWidth: 1,
                        outline: 'none',
                        cursor: 'pointer',
                      },
                      pressed: {
                        fill: '#FF5722',
                        stroke: '#F9F3F3',
                        strokeWidth: 1,
                        outline: 'none',
                      }
                  }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      <MapLegend scales={colorScales} />

      <ReactTooltip>
        <div dangerouslySetInnerHTML={{ __html: tooltipText }} />
      </ReactTooltip>
    </>
  )
}

export default memo(BrazilMap);
