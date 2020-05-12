const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');
//! Resolvers
const { portfolioQueries, portfolioMutations } = require('./resolvers');
//! Types
const { portfolioTypes } = require('./types');
//! GraphQl Models
const Portfolio = require('./models/Portfolio');

exports.createApolloServer = () => {
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
  //! "context" <- whatever we return from here will be provided to all of the resolvers
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
      models: {
        Portfolio: new Portfolio(mongoose.model('Portfolio')),
      },
    }),
  });

  return apolloServer;
};
