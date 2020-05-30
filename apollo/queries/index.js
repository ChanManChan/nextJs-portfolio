import gql from 'graphql-tag';

const p_server_Res = `
  _id
  title
  techStack {
    name
  }
  theme
`;

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
     ${p_server_Res}
    }
  }
`;

export const GET_USER_PROJECTS = gql`
  query UserProjects {
    userProjects {
      ${p_server_Res}
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
      ${p_server_Res}
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

const a_server_Res = `
    _id
    username
    role
    avatar
`;

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
        ${a_server_Res}
    }
  }
`;

export const FETCH_USER = gql`
  query User {
    user {
      ${a_server_Res}
    }
  }
`;

export const SIGN_OUT = gql`
  mutation SignOut {
    signOut
  }
`;

//! PARTICULARS

export const FETCH_PARTICULARS_CATEGORIES = gql`
  query ParticularsCategories {
    particularsCategories {
      _id
      title
      subTitle
      slug
    }
  }
`;

const b_server_Res = `
    _id
    title
    slug
    content
    user {
      username
      avatar
    }
    particularsCategory {
      _id
      title
      slug
    }
`;

export const BRIEFS_BY_CATEGORY = gql`
  query BriefsByCategory($slug: String) {
    briefsByCategory(c_slug: $slug) {
      ${b_server_Res}
    }
  }
`;

export const CREATE_BRIEF = gql`
  mutation CreateBrief(
    $title: String
    $content: String
    $particularsCategory: String
    $certificate_img: Upload!
  ) {
    createBrief(
      input: {
        title: $title
        content: $content
        particularsCategory: $particularsCategory
        certificate_img: $certificate_img
      }
    ) {
      ${b_server_Res}
    }
  }
`;

const t_server_Res = `
  _id
  title
  content
  slug
  user {
    username
    avatar
  }
  createdAt
`;

export const CREATE_TOPIC = gql`
  mutation CreateTopic($title: String!, $content: String!) {
    createTopic(input: { title: $title, content: $content }) {
      ${t_server_Res}
    }
  }
`;

export const FETCH_TOPICS = gql`
  query Topics {
    topics {
      ${t_server_Res}
    }
  }
`;

export const TOPIC_BY_SLUG = gql`
  query TopicBySlug($slug: String) {
    topicBySlug(t_slug: $slug) {
      ${t_server_Res}
    }
  }
`;

const pst_server_Res = `
  _id
  content
  slug
  createdAt
  user {
    username
    avatar
  }
  topic {
    slug
  }
  parent {
    content
    user {
      username
      avatar
    }
  }
`;

export const POSTS_BY_TOPIC = gql`
  query PostsByTopic($slug: String, $pageNum: Int, $pageSize: Int) {
    postsByTopic(t_slug: $slug, pageNum: $pageNum, pageSize: $pageSize) {
      posts {
        ${pst_server_Res}
      }
      count
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($content: String, $topic: ID, $parent: ID) {
    createPost(input: { content: $content, topic: $topic, parent: $parent }) {
      ${pst_server_Res}
    }
  }
`;

export const FETCH_HIGHLIGHT = gql`
  query Highlight($ask: Int) {
    highlight(limit: $ask) {
      topics {
        ${t_server_Res}
      }
      projects {
        ${p_server_Res}
      }
    }
  }
`;
