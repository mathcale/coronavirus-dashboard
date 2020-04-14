import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  --background-color: #f2f4f5;
  --card-default-color: #ffffff;
  --sidebar-link-color: #a2a5b2;
  --sidebar-active-link-bg-color: #fc312e;
  --sidebar-active-link-color: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#__next {
  height: 100vh;
  background-color: var(--background-color);
  font-family: 'Roboto', sans-serif;
}
`;
