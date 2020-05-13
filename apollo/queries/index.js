import gql from 'graphql-tag';

export const GET_PORTFOLIO = gql`
  query Portfolio($id: ID) {
    portfolio(id: $id) {
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

export const GET_PORTFOLIOS = gql`
  query Portfolios {
    portfolios {
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

export const CREATE_PORTFOLIO = gql`
  mutation CreatePortfolio {
    createPortfolio(
      input: {
        title: "Testing Mutation"
        techStack: "CRUD"
        repoAPI: "https://testing.com"
        repoClient: "https://testingClient.com"
        deployed: "https://xyz.com"
        theme: "#f00"
        description: "CRUD Mutation on Portfolios"
      }
    ) {
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
