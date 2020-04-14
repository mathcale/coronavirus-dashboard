import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: ${props => props.sidebar ? 'column' : 'row'};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${props => props.sidebar ? '100%' : 'fit-content'};
  padding: 20px;
  background-color: var(--card-default-color);
  border-radius: 25px;
`;
