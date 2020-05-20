import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import { toast } from 'react-toastify';

import {
  GET_PORTFOLIOS,
  CREATE_PORTFOLIO,
  UPDATE_PORTFOLIO,
  DELETE_PORTFOLIO,
  GET_TECH_STACK,
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
} from '@/apollo/queries';
import { FETCH_USER } from '../queries';

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

//! PORTFOLIOS------------------------------
export const useGetPortfolios = () => useQuery(GET_PORTFOLIOS);

export const useCreatePortfolio = () =>
  useMutation(CREATE_PORTFOLIO, {
    update(cache, { data: { createPortfolio } }) {
      //! Get old portfolios from cache
      const { portfolios } = cache.readQuery({ query: GET_PORTFOLIOS });
      //! Update the cache with the recently created portfolio
      cache.writeQuery({
        query: GET_PORTFOLIOS,
        data: { portfolios: [...portfolios, createPortfolio] },
      });
    },
    onError: (error) => shared_operations.onFail(error),
    onCompleted: () =>
      shared_operations.onSuccess('Portfolio created successfully'),
  });

//! No additional changes are required for "updatePortfolio", so we dont need to update the cache, because the cache is updated automatically  for us and it will also update the view for us automatically so the view is re-rendered.
export const useUpdatePortfolio = () => useMutation(UPDATE_PORTFOLIO);

export const useDeletePortfolio = () =>
  useMutation(DELETE_PORTFOLIO, {
    update(cache, { data: { deletePortfolio } }) {
      const { portfolios } = cache.readQuery({ query: GET_PORTFOLIOS });
      cache.writeQuery({
        query: GET_PORTFOLIOS,
        data: {
          portfolios: portfolios.filter((p) => p._id !== deletePortfolio),
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
