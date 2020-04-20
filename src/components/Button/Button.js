import styled from 'styled-components';

export const Button = styled.button`
  width: 150px;
  padding: 10px;
  background-color: var(--white);
  border: 2px solid var(--sidebar-active-link-bg-color);
  border-radius: 30px;
  font-size: 18px;
  color: var(--sidebar-active-link-bg-color);
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    background-color: var(--sidebar-active-link-bg-color);
    color: #ffffff;
  }
`;
