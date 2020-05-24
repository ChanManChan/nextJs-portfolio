//! Whenever your are defining mutation, the parameter values should be of Input type

const projectFields = `
  title: String
  repoAPI: String
  repoClient: String
  deployed: String
  theme: String
  description: String
`;

exports.projectTypes = `
  type Tech {
    _id: ID
    name: String
    description: String
    theme: String
  }
  type Project {
      _id: ID,
      techStack: [Tech],
      screenshots: [String]
     ${projectFields}
  }
  input ProjectInput {
     techStack: [ID],
     screenshots: [Upload!]!
     ${projectFields}
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
