//! Whenever your are defining mutation, the parameter values should be of Input type

const portfolioFields = `
  title: String,
  techStack: String,
  repoAPI: String,
  repoClient: String,
  deployed: String,
  theme: String,
  description: String,
`;

exports.portfolioTypes = `
  type Portfolio {
      _id: ID,
     ${portfolioFields}
    }
    input PortfolioInput {
     ${portfolioFields}
    }
`;

exports.authenticationTypes = `
  input SignUpInput {
    avatar: String
    username: String!
    name: String
    email: String!
    password: String!
    passwordConfirmation: String!
  }
`;
