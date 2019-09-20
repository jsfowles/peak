import App, { Container } from 'next/app'
import Head from 'next/head'
import * as React from 'react';


class ProjectRoot extends App {
  // TODO figure out why not having this causes an error
  private props: any;

  render() {
    const { Component, pageProps } = this.props;
    return (
        <>
          <Head>
            <title>New Project</title>
          </Head>
        <Component {...pageProps} />
        </>
    )
  }
}

export default ProjectRoot;
