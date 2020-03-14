import styled from 'styled-components';

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.size && (props.size > 0 && props.size < 4) ? props.size : '12'}, minmax(250px, 1fr));
  grid-auto-flow: row;
  gap: 10px;
  margin-top: 30px;
`;
