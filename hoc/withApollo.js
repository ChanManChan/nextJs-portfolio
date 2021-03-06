import withApollo from 'next-with-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { createUploadLink } from 'apollo-upload-client';
import { BatchHttpLink } from 'apollo-link-batch-http';
import gql from 'graphql-tag';

//! PROVIDE "APOLLOPROVIDER" ONLY TO THE COMPONENTS OR TO THE PAGES WHICH NEEDS TO WORK WITH QUERIES AND MUTATIONS.

//! "withApollo" is a Higher Order Component which takes our page and it will render our page wrapped with ApolloProvider so that we can use queries and mutations in our page and also it will be executed server side.

const OPTS = {
  uri: process.env.GRAPH_URL,
  credentials: 'include',
};

const httpLink = (head) =>
  ApolloLink.split(
    (operation) => operation.getContext().hasUpload,
    createUploadLink({ ...OPTS, headers: head }),
    new BatchHttpLink({ ...OPTS, headers: head })
  );

const typeDefs = gql`
  type ScreenshotInput {
    screenshot: Upload
    caption: String
    description: String
    preview: String
    fileName: String
  }
`;

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
        httpLink(headers),
      ]),
      cache: new InMemoryCache().restore(initialState || {}),
      typeDefs,
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
