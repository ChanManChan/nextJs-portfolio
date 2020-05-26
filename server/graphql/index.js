const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');
//! Resolvers
const {
  projectQueries,
  projectMutations,
  techQueries,
  authenticationQueries,
  authenticationMutations,
  particularsQueries,
  particularsMutations,
  topicQueries,
  topicMutations,
} = require('./resolvers');
//! Types
const {
  projectTypes,
  authenticationTypes,
  particularsTypes,
  topicTypes,
} = require('./types');
//! Authentication
const { buildAuthContext } = require('./context');
//! GraphQl Models
const Project = require('./models/Project');
const User = require('./models/User');
const Tech = require('./models/Tech');
const ParticularsCategory = require('./models/ParticularsCategory');
const Brief = require('./models/Brief');
const Topic = require('./models/Topic');

exports.createApolloServer = () => {
  //! Construct a schema using GRAPHQL schema language
  //? Example:- createPortfolio(portfolio: Portfolio): Portfolio  <-resolverMethod(parameterName: parameterType): returnType
  //? In ApolloServer, we don't call it "schema" but "typeDefs", and we dont use "buildSchema" function but we use "gql"

  const typeDefs = gql`
    ${projectTypes}
    ${authenticationTypes}
    ${particularsTypes}
    ${topicTypes}

    type Query {
      project(id: ID): Project
      projects: [Project]
      userProjects: [Project]

      techStack: [Tech]

      user: User

      particularsCategories: [ParticularsCategory]
      briefsByCategory(c_slug: String): [Brief]

      topics: [Topic]
    }

    type Mutation {
      createProject(input: ProjectInput): Project
      updateProject(id: ID, input: ProjectInput): Project
      deleteProject(id: ID): ID

      createBrief(input: BriefInput): Brief

      signUp(input: SignUpInput): String
      signIn(input: SignInInput): User
      signOut: Boolean

      createTopic(input: TopicInput): Topic
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
      ...particularsQueries,
      ...topicQueries,
    },
    Mutation: {
      ...projectMutations,
      ...authenticationMutations,
      ...particularsMutations,
      ...topicMutations,
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
        ParticularsCategory: new ParticularsCategory(
          mongoose.model('ParticularsCategory')
        ),
        Brief: new Brief(mongoose.model('Brief'), req.user),
        Topic: new Topic(mongoose.model('Topic'), req.user),
      },
    }),
  });

  return apolloServer;
};
