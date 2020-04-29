import styled from 'styled-components';

const StyledImg = styled.img`
  width: 32px;
  height: 23px;
`;

export const StateFlag = ({ state }) => (
  <StyledImg src={`/img/flags/bandeira_${state.toLowerCase()}.png`} alt={state} />
);
