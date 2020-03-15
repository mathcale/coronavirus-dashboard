import styled from 'styled-components';

const CardWrapper = styled.div`
  position: relative;
  height: fit-content;
  padding: 20px;
  background-color: var(--card-color);
  border-radius: 15px;
  color: var(--white);

  h3 {
    font-size: 32px;
    margin-bottom: 10px;
  }

  .count {
    font-size: 21px;
    font-style: italic;
    color: #ccc;
  }
`;

export const Card = props => (
  <CardWrapper hasChart={props.chart}>
    {props.content || props.chart ? props.children : (
      <>
        <h3>{props.title}</h3>
        <p className="count">{props.count || '0'}</p>
      </>
    )}
  </CardWrapper>
);
