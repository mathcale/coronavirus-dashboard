import styled from 'styled-components';

export const Form = styled.form`
  .form-control {
    display: inline-block;
  }

  label {
    margin-right: 10px;

    @media screen and (max-width: 1130px) {
      display: block;
      margin-bottom: 10px;
    }
  }

  select {
    display: inline-block;
    margin-right: 10px;
    padding: 10px 15px;
    background-color: var(--card-color);
    border: 1px solid var(--accent-color);
    border-radius: 10px;
    font-size: 16px;
    color: var(--white);

    @media screen and (max-width: 1130px) {
      display: block;
      width: 100%;
      margin-bottom: 10px;
    }
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

    @media screen and (max-width: 1130px) {
      display: block;
    }
  }

  button:hover {
    background-color: var(--accent-color);
    color: var(--main-color);
  }
`;
