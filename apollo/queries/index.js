import gql from 'graphql-tag';

export const GET_PROJECT = gql`
  query Project($id: ID) {
    project(id: $id) {
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

export const GET_PROJECTS = gql`
  query Projects {
    projects {
      _id
      title
      techStack {
        name
      }
      theme
    }
  }
`;

export const GET_USER_PROJECTS = gql`
  query UserProjects {
    userProjects {
      _id
      title
      techStack {
        name
      }
      theme
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation CreateProject(
    $title: String
    $techStack: [ID]
    $repoAPI: String
    $repoClient: String
    $deployed: String
    $theme: String
    $description: String
    $screenshots: [Upload!]!
  ) {
    createProject(
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

export const UPDATE_PROJECT = gql`
  mutation UpdateProject(
    $id: ID
    $title: String
    $techStack: [ID]
    $repoAPI: String
    $repoClient: String
    $deployed: String
    $theme: String
    $description: String
    $screenshots: [Upload!]!
  ) {
    updateProject(
      id: $id
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
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation DeleteProject($id: ID) {
    deleteProject(id: $id)
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
