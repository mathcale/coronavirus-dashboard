import styled from 'styled-components';
import { brazilianStates } from '../../utils';
import { StateFlag } from '../StateFlag/StateFlag';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props=> props.sidebar ? 'center' : null};
  justify-content: ${props => props.sidebar ? 'space-between' : (props.centerJustified ? 'center' : null)};
  width: ${props => props.sidebar ? '80px' : '100%'};
  height: ${props => props.sidebar || props.fullHeight ? '100%' : 'fit-content'};
  margin-bottom: ${props => props.countrySummary || props.stateSummary ? '15px' : null};
  padding: ${props => !props.news && '20px'};
  background-color: var(--card-default-color);
  border: ${props => props.countrySummary || props.stateSummary ? '2px solid var(--card-border-color)' : null};
  border-radius: 25px;
  overflow-y: ${props => props.fullHeight && 'scroll'};

  @media (max-width: 1024px) {
    margin-bottom: ${props => !props.sidebar && '15px'};
  }

  ${props => props.sidebar && `
    @media (max-width: 1024px) {
      flex-direction: row;
      width: 100%;
      height: 80px;
      border-radius: 0px;
    }
  `}

  ${props => props.cta && `
    @media (max-width: 1024px) {
      text-align: center;

      .col-md-4 {
        width: 100%;
        margin-bottom: 10px;
      }

      button {
        margin: 0 auto;
      }
    }
  `}

  ${props => props.content && `
    h2 {
      margin-bottom: 10px;
    }

    ul {
      margin-top: 10px;
      margin-left: 20px;

      li {
        margin-bottom: 5px;
      }
    }

    a {
      color: var(--sidebar-active-link-bg-color);
    }

    p.source {
      margin-top: 10px;
    }

    p,
    li {
      color: var(--card-stats-title-color);
    }

    p {
      line-height: 1.5rem;
    }
  `}

  .col-md-7,
  .col-md-5 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }

  /* Stats cards styles */
  .stats--title {
    margin-bottom: 10px;
    color: var(--card-stats-title-color);
  }

  .stats--counter,
  .stats--state p {
    font-size: 32px;
    font-weight: bold;
    color: var(--black);
  }

  .stats--share a:not(:last-child) {
    margin-right: 10px;
  }

  .stats--state {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      margin-right: 10px;
    }
  }

  /* Countries/States summary styles */
  .country-summary--title,
  .country-summary--data,
  .state-summary--title,
  .state-summary--data {
    display: flex;
    flex-direction: row;
  }

  .country-summary--title img,
  .state-summary--title img {
    width: 32px;
    margin-right: 10px;
  }

  .country-summary--data,
  .state-summary--data {
    justify-content: left;
    position: relative;
    margin-top: ${props => props.stateSummary ? '10px' : '20px'};

    p {
      font-size: 16px;
      font-weight: bold;
      color: var(--card-stats-title-color);

      &:first-child::after {
        content: '|';
        margin: 0 5px;

        @media (max-width: 1024px) {
          content: '';
          margin: 0px;
        }
      }
    }

    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }

  /* Summary column styles */
  .summary-column--notice {
    font-size: 14px;
    color: var(--card-stats-title-color);
  }

  input {
    position: relative;
    width: 100%;
    margin-top: 10px;
    padding: 7px;
    border: 1px solid var(--sidebar-link-color);
    border-radius: 4px;
    transition: border 300ms ease-in-out;

    &:focus,
    &:hover {
      outline: none;
      border: 1px solid #FA726E;
    }
  }

  .world-summary {
    height: 100%;
    margin-top: 20px;
  }

  /* Call-To-Action styles */
  .cta--image {
    display: block;
    width: 150px;
    margin: 0 auto;
  }

  /* News styles */
  .news-card--image {
    display: flex;
    position: relative;
    width: 100%;
    height: 180px;
    background-color: #eee;
    border-radius: 15px 15px 0 0;

    img {
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 25px 25px 0 0;
    }

    p {
      width: 100%;
      align-self: center;
      text-align: center;
      font-size: 18px;
      color: #aaa;
    }
  }

  .news-card--content {
    padding: 20px;

    h3 {
      margin-bottom: 10px;
      color: var(--black);

      a {
        text-decoration: none;
        color: var(--black);
      }
    }

    p {
      margin-bottom: 10px;
      font-size: 14px;
      font-style: italic;
      color: var(--sidebar-link-color);

      span {
        font-weight: bold;
        font-style: normal;
      }
    }

    a {
      text-decoration: none;
      color: var(--sidebar-active-link-bg-color);
    }
  }
`;

const CardFOVWrapper = styled.div`
  position: relative;
`;

const FOV = styled.div`
  position: absolute;
  bottom: 0;
  left: 0px;
  width: calc(100% - 5px);
  height: 80px;
  background-image: linear-gradient(to bottom, transparent 0%, var(--white) 80%);
  border-radius: 0 0 25px 25px;
`;

export const CardFOV = () => (
  <CardFOVWrapper>
    <FOV />
  </CardFOVWrapper>
);

export const CountrySummaryCard = props => (
  <Card countrySummary>
    <div className="country-summary--title">
      <img src={props.flag} alt={props.name} />
      <h3>{props.name}</h3>
    </div>

    <div className="country-summary--data">
      <p>Infectados: {Number(props.cases).toLocaleString()}</p>
      <p>Recuperados: {Number(props.recovered).toLocaleString()}</p>
    </div>
  </Card>
);

export const StateSummaryCard = props => (
  <Card stateSummary>
    <div className="state-summary--title">
      <StateFlag state={props.name} />
      <h3>{brazilianStates[props.name]}</h3>
    </div>

    <div className="state-summary--data">
      <p>Infectados: {Number(props.cases).toLocaleString('pt-BR')}</p>
      <p>Mortes: {Number(props.deaths).toLocaleString('pt-BR')}</p>
    </div>
  </Card>
);
