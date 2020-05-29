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

exports.particularsTypes = `
  type ParticularsCategory {
    _id: ID
    title: String
    subTitle: String
    slug: String
  }

  type Affiliated {
    avatar: String
    username: String
    name: String
  }

  type Brief {
    _id: ID
    title: String
    slug: String
    content: [String]
    particularsCategory: ParticularsCategory
    user: Affiliated
    createdAt: String
  }

  input BriefInput {
    title: String
    content: String
    particularsCategory: String
    certificate_img: Upload!
  }
`;

exports.topicTypes = `
  type Topic {
    _id: ID
    title: String
    content: String
    user: Affiliated
    slug: String
    createdAt: String
  }

  input TopicInput {
    title: String!
    content: String!
  }

  type Post {
    _id: ID
    content: String
    slug: String
    fullSlug: String
    topic: Topic
    user: Affiliated
    parent: Post
    createdAt: String
  }

  type PagPosts {
    posts: [Post]
    count: Int
  }

  input PostInput {
    content: String
    parent: ID
    topic: ID
  }
`;
