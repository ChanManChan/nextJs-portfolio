import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import { toast } from 'react-toastify';

import {
  GET_PROJECTS,
  GET_PROJECT,
  CREATE_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  FETCH_USER,
  GET_USER_PROJECTS,
  GET_TECH_STACK,
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
  FETCH_PARTICULARS_CATEGORIES,
  BRIEFS_BY_CATEGORY,
  CREATE_BRIEF,
  FETCH_TOPICS,
  CREATE_TOPIC,
  TOPIC_BY_SLUG,
  POSTS_BY_TOPIC,
  CREATE_POST,
} from '@/apollo/queries';

const shared_operations = {
  onFail: (error) => {
    if (error.graphQLErrors && error.graphQLErrors[0].message)
      toast.error(error.graphQLErrors[0].message, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
  },
  onSuccess: (msg) => {
    toast.success(msg, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  },
};

//! TECH_STACK------------------------------
export const useFetchTech = () => useQuery(GET_TECH_STACK);

//! PROJECTS------------------------------
export const useGetProjects = () => useQuery(GET_PROJECTS);

export const useGetUserProjects = () => useQuery(GET_USER_PROJECTS);

export const useGetProject = (options) => useQuery(GET_PROJECT, options);

export const useCreateProject = () =>
  useMutation(CREATE_PROJECT, {
    update(cache, { data: { createProject } }) {
      try {
        //! Get old projects from cache
        const { projects } = cache.readQuery({ query: GET_PROJECTS });
        //! Update the cache with the recently created projects
        cache.writeQuery({
          query: GET_PROJECTS,
          data: { projects: [...projects, createProject] },
        });
      } catch (e) {}
    },
    onError: (error) => shared_operations.onFail(error),
    onCompleted: () =>
      shared_operations.onSuccess('Project created successfully'),
    context: {
      hasUpload: true,
    },
  });

//! No additional changes are required for "updatePortfolio", so we dont need to update the cache, because the cache is updated automatically  for us and it will also update the view for us automatically so the view is re-rendered.
export const useUpdateProject = () =>
  useMutation(UPDATE_PROJECT, {
    onError: (error) => shared_operations.onFail(error),
    onCompleted: () =>
      shared_operations.onSuccess('Project updated successfully'),
    context: { hasUpload: true },
  });

export const useDeleteProject = () =>
  useMutation(DELETE_PROJECT, {
    update(cache, { data: { deleteProject } }) {
      const { userProjects } = cache.readQuery({
        query: GET_USER_PROJECTS,
      });
      cache.writeQuery({
        query: GET_USER_PROJECTS,
        data: {
          userProjects: userProjects.filter((p) => p._id !== deleteProject),
        },
      });
    },
  });

//! AUTHENTICATION ------------------------------
export const useSignUp = () =>
  useMutation(SIGN_UP, {
    onError: (error) => shared_operations.onFail(error),
    onCompleted: () =>
      shared_operations.onSuccess('User registered successfully'),
    context: { hasUpload: true },
  });

export const useSignIn = () =>
  useMutation(SIGN_IN, {
    update(cache, { data: { signIn: signedInUser } }) {
      cache.writeQuery({
        query: FETCH_USER,
        data: { user: signedInUser },
      });
    },
    onError: (error) => shared_operations.onFail(error),
    onCompleted: (data) => {
      if (data && data.signIn)
        shared_operations.onSuccess('Welcome ' + data.signIn.username);
    },
  });

//! Create a "lazyQuery" <- query that i need to execute manually (not executed automatically when i provide it to a functional component). I'm doing it like so to fetch my user client-side
export const useLazyFetchUser = () => useLazyQuery(FETCH_USER);

export const useFetchUser = () => useQuery(FETCH_USER);

export const useSignOut = () => useMutation(SIGN_OUT);

//! PARTICULARS------------------------------
export const useFetchParticularsCategories = () =>
  useQuery(FETCH_PARTICULARS_CATEGORIES);

export const useFetchBriefsByCategory = (options) =>
  useQuery(BRIEFS_BY_CATEGORY, options);

export const useCreateBrief = () =>
  useMutation(CREATE_BRIEF, {
    update(cache, { data: { createBrief } }) {
      try {
        const { briefsByCategory } = cache.readQuery({
          query: BRIEFS_BY_CATEGORY,
          variables: { slug: createBrief.particularsCategory.slug },
        });
        cache.writeQuery({
          query: BRIEFS_BY_CATEGORY,
          data: { briefsByCategory: [...briefsByCategory, createBrief] },
          variables: { slug: createBrief.particularsCategory.slug },
        });
      } catch (e) {
        debugger;
      }
    },
    context: {
      hasUpload: true,
    },
  });

//! TOPICS------------------------------
export const useFetchAllTopics = () => useQuery(FETCH_TOPICS);

export const useCreateTopic = () =>
  useMutation(CREATE_TOPIC, {
    update(cache, { data: { createTopic } }) {
      try {
        const { topics } = cache.readQuery({ query: FETCH_TOPICS });
        cache.writeQuery({
          query: FETCH_TOPICS,
          data: { topics: [...topics, createTopic] },
        });
      } catch (e) {
        debugger;
      }
    },
  });

export const useFetchTopicBySlug = (options) =>
  useQuery(TOPIC_BY_SLUG, options);

export const useFetchPostsByTopic = (options) =>
  useQuery(POSTS_BY_TOPIC, options);

export const useCreatePost = () =>
  useMutation(CREATE_POST, {
    update(cache, { data: { createPost } }) {
      try {
        const { postsByTopic } = cache.readQuery({
          query: POSTS_BY_TOPIC,
          variables: { slug: createPost.topic.slug },
        });
        cache.writeQuery({
          query: POSTS_BY_TOPIC,
          data: { postsByTopic: [...postsByTopic, createPost] },
          variables: { slug: createPost.topic.slug },
        });
      } catch (e) {
        debugger;
      }
    },
  });
