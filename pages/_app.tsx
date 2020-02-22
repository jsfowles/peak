import * as React from 'react';
import App from 'next/app';
import Head from 'next/head';

import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';

import Layout from '@components/Layout';
import * as theme from '@identity/index';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <>
          <Head>
            <title>Degreed</title>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          </Head>

          <Layout>
            <AnimatePresence exitBeforeEnter>
              <motion.main
                key={router.route}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Component {...pageProps} key={router.route} />
              </motion.main>
            </AnimatePresence>
          </Layout>
        </>
      </ThemeProvider>
    );
  }
}

export default MyApp;
