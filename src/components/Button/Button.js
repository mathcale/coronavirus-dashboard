import styled from 'styled-components';

export const Button = styled.button`
  width: ${props => props.small ? '50px' : '150px'};
  padding: ${props => props.small ? '5px' : '10px'};
  background-color: var(--white);
  border: 2px solid var(--sidebar-active-link-bg-color);
  border-radius: 30px;
  font-size: ${props => props.small ? '14px' : '18px'};
  color: var(--sidebar-active-link-bg-color);
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    background-color: var(--sidebar-active-link-bg-color);
    color: var(--white);
  }

  &:focus,
  &:active {
    outline: none;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;

  button:first-child {
    margin-right: 10px;
  }
`;
