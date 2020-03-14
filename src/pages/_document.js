import Document from 'next/document';
import { createGlobalStyle, ServerStyleSheet } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --sidebar-color: #1c3146;
  --main-color: #071d34;
  --card-color: #1c3146;
  --white: #fffef8;
  --text-muted: #66788e;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#__next,
.app-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: var(--main-color);
  font-family: 'Roboto', sans-serif;
}

.app-wrapper {
  display: grid;
  grid-template-columns: 300px 1fr;
}

.sidebar {
  padding: 50px 30px;
  background-color: var(--sidebar-color);
}

.main {
  padding: 50px 30px;
}
`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(
            <>
              <GlobalStyles />
              <App {...props} />
            </>
          ),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal();
    }
  }
}
