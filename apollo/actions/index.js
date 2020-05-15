import { useQuery, useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';

import {
  GET_PORTFOLIOS,
  CREATE_PORTFOLIO,
  UPDATE_PORTFOLIO,
  DELETE_PORTFOLIO,
  SIGN_UP,
  SIGN_IN,
} from '@/apollo/queries';

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
    onCompleted() {
      toast.success('Successfully registered user', {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    },
    onError: (error) => {
      if (error.graphQLErrors && error.graphQLErrors[0].message)
        toast.error(error.graphQLErrors[0].message, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
    },
  });

export const useSignIn = () => useMutation(SIGN_IN);
