import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

//! PROVIDE "APOLLOPROVIDER" ONLY TO THE COMPONENTS OR TO THE PAGES WHICH NEEDS TO WORK WITH QUERIES AND MUTATIONS.

//! "withApollo" is a Higher Order Component which takes our page and it will render our page wrapped with ApolloProvider so that we can use queries and mutations in our page and also it will be executed server side.
export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: 'http://localhost:3000/graphql',
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
