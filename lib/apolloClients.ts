import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';



export const client = (initialState ={}) =>
    new ApolloClient({
        connectToDevTools: typeof window === 'undefined',
        ssrMode: typeof window === 'undefined',
        link: new HttpLink({
            uri: 'http://localhost:3000/',
        }),
        cache: new InMemoryCache().restore(initialState),
    });