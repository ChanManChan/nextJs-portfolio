//! Whenever your are defining mutation, the parameter values should be of Input type

const portfolioFields = `
  title: String
  repoAPI: String
  repoClient: String
  deployed: String
  theme: String
  description: String
`;

exports.portfolioTypes = `
  type Tech {
    _id: ID
    name: String
    description: String
    theme: String
  }
  type Portfolio {
      _id: ID,
      techStack: [Tech],
      screenshots: [String]
     ${portfolioFields}
  }
  input PortfolioInput {
     techStack: [String],
     screenshots: [Upload!]!
     ${portfolioFields}
  }
`;

exports.authenticationTypes = `
  type User {
    _id: ID,
    avatar: String
    username: String
    name: String
    email: String
    role: String
    info: String
  }

  input SignUpInput {
    avatar: Upload!
    username: String!
    name: String
    email: String!
    password: String!
  }

  input SignInInput {
    email: String!
    password: String!
  }
`;
