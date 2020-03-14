import styled from 'styled-components';

const CardWrapper = styled.div`
  padding: 20px;
  background-color: var(--card-color);
  border-radius: 15px;
  color: var(--white);

  h3 {
    font-size: 32px;
    margin-bottom: 10px;
  }

  p {
    font-size: 21px;
  }
`;

export const Card = props => (
  <CardWrapper>
    <h3>{props.title}</h3>
    <p>{props.count || '0'}</p>
  </CardWrapper>
);
