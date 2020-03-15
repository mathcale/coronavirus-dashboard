import styled from 'styled-components';

export const Form = styled.form`
  .form-control {
    display: inline-block;
  }

  label {
    margin-right: 10px;
  }

  select {
    display: inline-block;
    margin-right: 10px;
    padding: 10px 15px;
    background-color: var(--card-color);
    border: 1px solid var(--accent-color);
    border-radius: 50%;
    font-size: 16px;
    color: var(--white);
  }

  button:focus,
  select:focus {
    outline: none;
  }

  button {
    display: inline-block;
    width: 100px;
    height: fit-content;
    padding: 5px;
    background-color: var(--card-color);
    border: 1px solid var(--accent-color);
    border-radius: 20px;
    font-size: 16px;
    color: var(--white);
    cursor: pointer;
    transition: all 300ms ease-in-out;
  }

  button:hover {
    background-color: var(--accent-color);
    color: var(--main-color);
  }
`;
