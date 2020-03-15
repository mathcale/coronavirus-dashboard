import styled from 'styled-components';

export const Alert = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: ${props => props.danger ? 'var(--danger-color)' : ''};
  border-radius: 15px;
  color: var(--white);
`;
