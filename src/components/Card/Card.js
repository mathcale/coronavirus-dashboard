import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props=> props.sidebar ? 'center' : null};
  justify-content: ${props => props.sidebar ? 'space-between' : null};
  width: ${props => props.sidebar ? '80px' : '100%'};
  height: ${props => props.sidebar || props.fullHeight ? '100%' : 'fit-content'};
  margin-bottom: ${props => props.countrySummary ? '15px' : null};
  padding: ${props => !props.news && '20px'};
  background-color: var(--card-default-color);
  border: ${props => props.countrySummary ? '2px solid var(--card-border-color)' : null};
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

  .col-md-7,
  .col-md-5 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }

  /* Sidebar styles */
  .sidebar--logo {
    display: block;
    position: relative;
    width: 100%;

    @media (max-width: 1024px) {
      width: 32px;
    }
  }

  /* Stats cards styles */
  .stats--title {
    margin-bottom: 10px;
    color: var(--card-stats-title-color);
  }

  .stats--counter {
    font-size: 32px;
    font-weight: bold;
    color: var(--black);
  }

  /* Countries summary styles */
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

  .summary-column--notice {
    margin-bottom: 20px;
    font-size: 14px;
    color: var(--card-stats-title-color);
  }

  .world-summary {
    height: 100%;
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
      color: var(--white);

      a {
        text-decoration: none;
        color: var(--white);
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

export const CountrySummaryCard = props => (
  <Card countrySummary>
    <div className="country-summary--title">
      <img src={props.flag} />
      <h3>{props.name}</h3>
    </div>

    <div className="country-summary--data">
      <p>Infectados: {Number(props.cases).toLocaleString()}</p>
      <p>Recuperados: {Number(props.recovered).toLocaleString()}</p>
    </div>
  </Card>
);
