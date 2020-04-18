import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props=> props.sidebar ? 'center' : null};
  justify-content: ${props => props.sidebar ? 'space-between' : null};
  width: 100%;
  height: ${props => props.sidebar ? '100%' : 'fit-content'};
  margin-bottom: ${props => props.countrySummary ? '15px' : null};
  padding: 20px;
  background-color: var(--card-default-color);
  border: ${props => props.countrySummary ? '2px solid var(--card-border-color)' : null};
  border-radius: 25px;

  .col-md-7,
  .col-md-5 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }

  .stats--title {
    margin-bottom: 10px;
    color: var(--card-stats-title-color);
  }

  .stats--counter {
    font-size: 32px;
    font-weight: bold;
    color: var(--black);
  }

  .country-summary--title,
  .country-summary--data {
    display: flex;
    flex-direction: row;
  }

  .country-summary--title {
    margin-bottom: 15px;

    img {
      width: 32px;
      margin-right: 10px;
    }
  }

  .country-summary--data {
    justify-content: left;

    p {
      font-size: 16px;
      font-weight: bold;
      color: var(--card-stats-title-color);

      &:first-child {
        margin-right: 5px;
      }
    }
  }
`;

export const CountrySummaryCard = props => (
  <Card countrySummary>
    <div className="country-summary--title">
      <img src={props.flag} />
      <h3>{props.name}</h3>
    </div>

    <div className="country-summary--data">
      <p>Infectados: {Number(props.cases).toLocaleString()} |</p>
      <p>Recuperados: {Number(props.recovered).toLocaleString()}</p>
    </div>
  </Card>
);
