import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props=> props.sidebar ? 'center' : null};
  justify-content: ${props => props.sidebar ? 'space-between' : null};
  width: 100%;
  height: ${props => props.sidebar ? '100%' : 'fit-content'};
  padding: 20px;
  background-color: var(--card-default-color);
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
`;
