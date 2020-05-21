import withApollo from 'next-with-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { createUploadLink } from 'apollo-upload-client';

//! PROVIDE "APOLLOPROVIDER" ONLY TO THE COMPONENTS OR TO THE PAGES WHICH NEEDS TO WORK WITH QUERIES AND MUTATIONS.

//! "withApollo" is a Higher Order Component which takes our page and it will render our page wrapped with ApolloProvider so that we can use queries and mutations in our page and also it will be executed server side.

export default withApollo(
  ({ initialState, headers }) => {
    return new ApolloClient({
      link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
          if (graphQLErrors)
            graphQLErrors.forEach(({ message, locations, path }) =>
              console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
              )
            );
          if (networkError) console.log(`[Network error]: ${networkError}`);
        }),
        new createUploadLink({
          uri: 'http://localhost:3000/graphql',
          credentials: 'include',
          headers,
        }),
      ]),
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);
