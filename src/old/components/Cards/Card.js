import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  height: fit-content;
  padding: ${props => props.news ? '0px' : '20px'};
  background-color: var(--card-color);
  border-radius: 15px;
  color: var(--white);

  ${props => props.news && `
    width: 300px;
    margin: 0 20px 20px 0;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  `}

  h3 {
    font-size: 32px;
    margin-bottom: 10px;
  }

  legend {
    font-size: 12px;
  }

  .count {
    font-size: 21px;
    font-style: italic;
    color: ${
      props => props.theme === 'info' ? '#008FFB' : (
        props.theme === 'warning' ? '#FEB019' : (
          props.theme === 'danger' ? '#FF4560' : '#cccccc'
        )
      )
    }
  }
`;

export const Card = props => (
  <CardWrapper theme={props.theme} hasChart={props.chart}>
    {props.content || props.chart ? props.children : (
      <>
        <h3>{props.title}</h3>
        <p className="count">{Number(props.count).toLocaleString() || '0'}</p>
      </>
    )}
  </CardWrapper>
);
