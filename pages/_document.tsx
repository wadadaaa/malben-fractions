/* eslint-disable @next/next/google-font-display */

import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=optional"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.min.css"
          />
          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css'
            integrity='sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB'
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
