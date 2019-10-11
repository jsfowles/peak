import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import Manifest from 'next-manifest/manifest'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <Manifest
              href='/static/manifest/manifest.json'
              themeColor='#F0F0F0'
              initialScale='1'
          />

          <link
            rel="shortcut icon"
            href="/static/favicon.ico"
            type="image/x-icon"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
