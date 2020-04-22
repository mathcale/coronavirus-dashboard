import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  /* General */
  --background-color: #f2f4f5;
  --white: #ffffff;
  --black: #303139;
  --brand-color: #e74d5f;

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

.row, .col-xs, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-offset-0, .col-xs-offset-1, .col-xs-offset-10, .col-xs-offset-11, .col-xs-offset-12, .col-xs-offset-2, .col-xs-offset-3, .col-xs-offset-4, .col-xs-offset-5, .col-xs-offset-6, .col-xs-offset-7, .col-xs-offset-8, .col-xs-offset-9 {
  @media (max-width: 1024px) {
    margin: 0px;
    padding: 0px;
  }
}

.app-wrapper {
  height: 100vh;
  padding: 20px;

  @media (max-width: 1024px) {
    padding: 0px;
  }
}

.app-row {
  margin-right: 0px;

  @media (max-width: 1024px) {
    margin: 0px;
  }
}

.with-full-height {
  height: 100%;
}

.with-top-spacing {
  margin-top: 20px;

  @media (max-width: 1024px) {
    margin-top: 0px;
  }
}

.with-responsive-top-spacing {
  @media (max-width: 1024px) {
    margin-top: 20px;
  }
}

.sidebar {
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    height: fit-content !important;
    margin-bottom: 20px;
  }
}

.sidebar,
.main-content {
  @media (max-width: 1024px) {
    padding: 0px;
  }
}

.main-container {
  @media (max-width: 1024px) {
    padding: 0 20px !important;
  }

  & > .row {
    @media (max-width: 1024px) {
      margin: 0px;
    }
  }
}

.index-page {
  height: 100%;

  @media (max-width: 1024px) {
    height: fit-content;
  }

  .summary-column {
    height: 100%;

    @media (max-width: 1024px) {
      height: 300px;
    }
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
