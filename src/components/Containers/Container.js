import styled from 'styled-components';

export const Container = styled.div`
  ${props => props.absoluteCenter && `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  `}

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 51px;
    color: var(--white);
  }

  .content {
    width: 70%;
    margin-top: 30px;
    font-size: 21px;
    color: var(--white);

    strong {
      font-weight: bold;
      color: var(--accent-color);
    }

    ul {
      margin: 30px;
      list-style: none;
    }

    a {
      text-decoration: underline;
      font-weight: bold;
      color: var(--accent-color);
    }
  }
`;
