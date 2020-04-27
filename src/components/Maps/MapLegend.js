import styled from 'styled-components';

const StyledUl = styled.ul`
  width: 100%;
  list-style: none;
  text-align: center;

  li {
    display: inline-block;
    margin-right: 5px;
    font-size: 12px;

    &:last-child {
      margin-right: 0px;
    }

    svg {
      display: inline-block;
      vertical-align: middle;
    }

    span {
      margin-left: -3px;
    }
  }
`;

export const MapLegend = ({ scales }) => (
  <StyledUl>
    {scales.map((scale, i) => (
      <li key={i}>
        <svg width="28" height="28">
          <circle
            cx="14"
            cy="14"
            r="8"
            stroke="var(--card-border-color)"
            stroke-width="2"
            fill={scale.color}
          />
        </svg>

        <span>{scale.range[0]} - {scale.range[1]}</span>
      </li>
    ))}
  </StyledUl>
);
