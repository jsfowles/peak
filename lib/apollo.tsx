import * as React from 'react';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';

import { client } from './apolloClients';

let apolloClient = null;

const initApolloClient = (initialState: any = {}) => {
  if (typeof window === 'undefined') {
    return client(initialState);
  }

  if (!apolloClient) {
    apolloClient = client(initialState);
  }

  return apolloClient;
};

export const withApollo = (PageComponent, { ssr = true } = {}) => {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    const client = React.useMemo(
      () => apolloClient || initApolloClient(apolloState),
      [],
    );
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  if (process.env.NODE_ENV !== 'production') {
    const displayName =
      PageComponent.displayName || PageComponent.name || 'Component';

    if (displayName === 'App') {
      console.warn('This withApollo HOC only works with PageComponents.');
    }

    WithApollo.displayName = `withApollo(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async ctx => {
      const { AppTree } = ctx;
      const apolloClient = (ctx.apolloClient = initApolloClient());
      let pageProps = {};

      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      }

      if (typeof window === 'undefined') {
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        }

        if (ssr) {
          try {
            const { getDataFromTree } = await import('@apollo/react-ssr');
            await getDataFromTree(
              <AppTree
                pageProps={{
                  ...pageProps,
                  apolloClient,
                }}
              />,
            );
          } catch (error) {
            console.error('Error while running `getDataFromTree`', error);
          }

          Head.rewind();
        }
      }

      const apolloState = apolloClient.cache.extract();

      return {
        ...pageProps,
        apolloState,
      };
    };
  }

  return WithApollo;
};
