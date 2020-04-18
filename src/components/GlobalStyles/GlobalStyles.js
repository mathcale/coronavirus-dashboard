import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  /* General */
  --background-color: #f2f4f5;
  --white: '#ffffff';
  --black: '#303139';

  /* Card */
  --card-default-color: #ffffff;
  --card-stats-title-color: #687089;
  --card-border-color: #f6f1f1;

  /* Sidebar */
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

.world-map .jvectormap-container {
  border-radius: 10px;
}
`;
