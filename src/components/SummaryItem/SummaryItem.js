import styled from 'styled-components';

const SummaryItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 65px;
  }

  .world-summary-item--name {
    font-weight: bold;
  }

  .world-summary-item--count {
    margin-left: auto;
    color: var(--card-stats-title-color);
  }

  img {
    width: 32px;
    margin-right: 10px;
  }
`;

export const SummaryItem = props => (
  <SummaryItemContainer>
    {props.flag && (
      <img src={props.flag} alt={props.name} loading="lazy" />
    )}

    <p className="world-summary-item--name">{props.name}</p>
    <p className="world-summary-item--count">
      {Number(props.cases).toLocaleString()}
    </p>
  </SummaryItemContainer>
)
