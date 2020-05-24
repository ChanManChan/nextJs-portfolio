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
      //! Get old projects from cache
      const { projects } = cache.readQuery({ query: GET_PROJECTS });
      //! Update the cache with the recently created projects
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: [...projects, createProject] },
      });
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

//! AUTHENTICATION ----------------------------------
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
