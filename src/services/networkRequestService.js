import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  performGetRequest,
  performPostRequest,
  performPutRequest,
  performPatchRequest,
  performDeleteRequest,
} from './apiClient';

export const useGetRequest = (key, data, url, options) => {
  const requestOptions = options
    ? options
    : { refetchOnWindowFocus: false, retry: true };
  return useQuery([key, data], () => performGetRequest(url), requestOptions);
};

export const useAddMutation = (key, url, payload, onSuccess, onError) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return performPostRequest(url, payload);
    },
    {
      onSuccess: (data) => onSuccess(data),
      onError: (error) => onError(error),
      onSettled: () => {
        queryClient.invalidateQueries([key]);
      },
    }
  );
};

export const usePutMutation = (key, data, url, payload, onSuccess, onError) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return performPutRequest(url, payload);
    },
    {
      onSuccess: () => onSuccess(),
      onError: (error) => onError(error),
      onSettled: () => {
        queryClient.invalidateQueries([key]);
      },
    }
  );
};

export const useUpdateMutation = (key, url, payload, onSuccess, onError) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return performPatchRequest(url, payload);
    },
    {
      onSuccess: (data) => onSuccess(data),
      onError: (error) => onError(error),
      onSettled: () => {
        queryClient.invalidateQueries([key]);
      },
    }
  );
};

export const useDeleteMutation = (key, url, onSuccess, onError) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return performDeleteRequest(url);
    },
    {
      onSuccess: () => onSuccess(),
      onError: (error) => onError(error),
      onSettled: () => {
        queryClient.invalidateQueries([key]);
      },
    }
  );
};
