const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');
//! Resolvers
const {
  portfolioQueries,
  portfolioMutations,
  techQueries,
  authenticationQueries,
  authenticationMutations,
} = require('./resolvers');
//! Types
const { portfolioTypes, authenticationTypes } = require('./types');
//! Authentication
const { buildAuthContext } = require('./context');
//! GraphQl Models
const Portfolio = require('./models/Portfolio');
const User = require('./models/User');
const Tech = require('./models/Tech');

exports.createApolloServer = () => {
  //! Construct a schema using GRAPHQL schema language
  //? Example:- createPortfolio(portfolio: Portfolio): Portfolio  <-resolverMethod(parameterName: parameterType): returnType
  //? In ApolloServer, we don't call it "schema" but "typeDefs", and we dont use "buildSchema" function but we use "gql"

  const typeDefs = gql`
    ${portfolioTypes}
    ${authenticationTypes}
    type Query {
      portfolio(id: ID): Portfolio
      portfolios: [Portfolio]
      techStack: [Tech]
      user: User
    }
    type Mutation {
      createPortfolio(input: PortfolioInput): Portfolio
      updatePortfolio(id: ID, input: PortfolioInput): Portfolio
      deletePortfolio(id: ID): ID

      signUp(input: SignUpInput): String
      signIn(input: SignInInput): User
      signOut: Boolean
    }
  `;

  //! The root provides a resolver for each API endpoint
  //? rename "root" to "resolvers" for ApolloServer and define 2 types of resolvers (Query and Mutation resolvers)
  // Initially we were defining all of our resolvers together in "portfolioResolvers" inside graphql > resolvers > index.js and we changed it structurally

  const resolvers = {
    Query: {
      ...portfolioQueries,
      ...techQueries,
      ...authenticationQueries,
    },
    Mutation: {
      ...portfolioMutations,
      ...authenticationMutations,
    },
  };

  //! With ApolloServer, we no more need server.use('/graphql',...)
  //! "context" <- whatever we return from here will be provided to all of the resolvers
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
      ...buildAuthContext(req),
      models: {
        Portfolio: new Portfolio(mongoose.model('Portfolio')),
        User: new User(mongoose.model('User')),
        Tech: new Tech(mongoose.model('Tech')),
      },
    }),
  });

  return apolloServer;
};
