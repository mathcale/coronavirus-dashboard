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

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 5px;
  transition: backkground 300ms ease;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

html,
body,
#__next {
  height: 100vh;
  background-color: var(--background-color);
  font-family: 'Roboto', sans-serif;
}

.with-full-height {
  height: 100%;
}

.sidebar {
  @media (max-width: 1024px) {
    height: fit-content !important;
    margin-bottom: 20px;
  }
}

.world-map .jvectormap-container {
  border-radius: 10px;
}

.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  h1 {
    margin-top: 20px;
    color: var(--sidebar-link-color);
  }

  img {
    width: 500px;

    @media (max-width: 1024px) {
      width: 80%;
    }
  }
}
`;
