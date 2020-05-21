import gql from 'graphql-tag';

export const GET_PORTFOLIO = gql`
  query Portfolio($id: ID) {
    portfolio(id: $id) {
      _id
      title
      techStack {
        _id
        name
        description
        theme
      }
      repoAPI
      repoClient
      deployed
      description
      theme
    }
  }
`;

export const GET_TECH_STACK = gql`
  query TechStack {
    techStack {
      _id
      name
      description
      theme
    }
  }
`;

export const GET_PORTFOLIOS = gql`
  query Portfolios {
    portfolios {
      _id
      title
      techStack {
        name
      }
      theme
    }
  }
`;

export const GET_USER_PORTFOLIOS = gql`
  query UserPortfolios {
    userPortfolios {
      _id
      title
      techStack {
        name
      }
      theme
    }
  }
`;

export const CREATE_PORTFOLIO = gql`
  mutation CreatePortfolio(
    $title: String
    $techStack: [ID]
    $repoAPI: String
    $repoClient: String
    $deployed: String
    $theme: String
    $description: String
    $screenshots: [Upload!]!
  ) {
    createPortfolio(
      input: {
        title: $title
        techStack: $techStack
        repoAPI: $repoAPI
        repoClient: $repoClient
        deployed: $deployed
        theme: $theme
        description: $description
        screenshots: $screenshots
      }
    ) {
      _id
      title
    }
  }
`;

export const UPDATE_PORTFOLIO = gql`
  mutation UpdatePortfolio($id: ID) {
    updatePortfolio(id: $id, input: { title: "Testing Mutation [UPDATED]" }) {
      _id
      title
      techStack
      repoAPI
      repoClient
      deployed
      description
      theme
    }
  }
`;

export const DELETE_PORTFOLIO = gql`
  mutation DeletePortfolio($id: ID) {
    deletePortfolio(id: $id)
  }
`;

//! AUTHENTICATION QUERIES
export const SIGN_UP = gql`
  mutation SignUp(
    $avatar: Upload!
    $username: String!
    $email: String!
    $password: String!
  ) {
    signUp(
      input: {
        avatar: $avatar
        username: $username
        email: $email
        password: $password
      }
    )
  }
`;

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      _id
      username
      role
      avatar
    }
  }
`;

export const FETCH_USER = gql`
  query User {
    user {
      _id
      username
      role
      avatar
    }
  }
`;

export const SIGN_OUT = gql`
  mutation SignOut {
    signOut
  }
`;
