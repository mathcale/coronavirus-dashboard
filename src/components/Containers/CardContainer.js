import styled from 'styled-components';

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.size && (props.size > 0 && props.size < 4) ? props.size : '4'}, minmax(250px, 1fr));
  grid-auto-flow: row;
  gap: 10px;
  margin-top: 30px;
  width: 100%;

  @media screen and (max-width: 1130px) {
    grid-template-columns: repeat(1, minmax(250px, 1fr));
  }
`;
