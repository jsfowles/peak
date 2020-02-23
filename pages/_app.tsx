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
                transition={{
                  duration: 0.25,
                  delay: 0.1,
                  damping: 50,
                  stiffness: 250,
                }}
                key={router.route}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1.0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                style={
                  {
                    // background: router.route === '/' ? '#e9f7fe' : '#e9fefb',
                  }
                }
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
