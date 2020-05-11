const express = require('express');
const next = require('next');
const { ApolloServer, gql } = require('apollo-server-express');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

//! Resolvers
const { portfolioQueries, portfolioMutations } = require('./graphql/resolvers');

//! Types
const { portfolioTypes } = require('./graphql/types');

app.prepare().then(() => {
  //! Pass this "server" to "apolloServer.applyMiddleware(...)"
  const server = express();

  //! Construct a schema using GRAPHQL schema language
  //? Example:- createPortfolio(portfolio: Portfolio): Portfolio  <-resolverMethod(parameterName: parameterType): returnType
  //? In ApolloServer, we don't call it "schema" but "typeDefs", and we dont use "buildSchema" function but we use "gql"
  const typeDefs = gql`
    ${portfolioTypes}
    type Query {
      portfolio(id: ID): Portfolio
      portfolios: [Portfolio]
    }
    type Mutation {
      createPortfolio(input: PortfolioInput): Portfolio
      updatePortfolio(id: ID, input: PortfolioInput): Portfolio
      deletePortfolio(id: ID): ID
    }
  `;

  //! The root provides a resolver for each API endpoint
  //? rename "root" to "resolvers" for ApolloServer and define 2 types of resolvers (Query and Mutation resolvers)
  // Initially we were defining all of our resolvers together in "portfolioResolvers" inside graphql > resolvers > index.js and we changed it structurally
  const resolvers = {
    Query: {
      ...portfolioQueries,
    },
    Mutation: {
      ...portfolioMutations,
    },
  };
  //! With ApolloServer, we no more need server.use('/graphql',...)
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  //! Apply middleware to ApolloServer
  apolloServer.applyMiddleware({ app: server });
  // server.use(
  //   '/graphql',
  //   graphqlHTTP({
  //     schema,
  //     rootValue: root,
  //     graphiql: true,
  //   })
  // );

  server.all('*', (req, res) => {
    // debugger;
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
