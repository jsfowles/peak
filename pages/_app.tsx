import * as React from 'react';
import App from 'next/app';
import Head from 'next/head';

import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';

import Layout from '@components/Layout';
import * as theme from '@identity/index';

import { mainMotion } from '@identity/motion';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <>
          <Head>
            <title>The Peak</title>
            <link rel="shortcut icon" type="image/x-icon" />
          </Head>

          <Layout>
            <AnimatePresence exitBeforeEnter>
              <motion.main {...mainMotion} key={router.route}>
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
