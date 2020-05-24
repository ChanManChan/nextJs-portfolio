const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');
//! Resolvers
const {
  projectQueries,
  projectMutations,
  techQueries,
  authenticationQueries,
  authenticationMutations,
} = require('./resolvers');
//! Types
const { projectTypes, authenticationTypes } = require('./types');
//! Authentication
const { buildAuthContext } = require('./context');
//! GraphQl Models
const Project = require('./models/Project');
const User = require('./models/User');
const Tech = require('./models/Tech');

exports.createApolloServer = () => {
  //! Construct a schema using GRAPHQL schema language
  //? Example:- createPortfolio(portfolio: Portfolio): Portfolio  <-resolverMethod(parameterName: parameterType): returnType
  //? In ApolloServer, we don't call it "schema" but "typeDefs", and we dont use "buildSchema" function but we use "gql"

  const typeDefs = gql`
    ${projectTypes}
    ${authenticationTypes}
    type Query {
      project(id: ID): Project
      projects: [Project]
      techStack: [Tech]
      userProjects: [Project]
      user: User
    }

    type Mutation {
      createProject(input: ProjectInput): Project
      updateProject(id: ID, input: ProjectInput): Project
      deleteProject(id: ID): ID

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
      ...projectQueries,
      ...techQueries,
      ...authenticationQueries,
    },
    Mutation: {
      ...projectMutations,
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
        Project: new Project(mongoose.model('Project'), req.user),
        User: new User(mongoose.model('User')),
        Tech: new Tech(mongoose.model('Tech')),
      },
    }),
  });

  return apolloServer;
};
