import { globalContext } from '@/globalContext';
import { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import { useContext } from 'react';
import { QueryKey, useQuery, UseQueryOptions } from 'react-query';
import apiInstance from '../apiInstance';

const useApiQuery = <ResponseType, ErrorType>(
  queryKey: QueryKey,
  path: string,
  options?: UseQueryOptions<AxiosResponse<ResponseType>, AxiosError<ErrorType>, ResponseType> & {
    requestConfig?: Omit<AxiosRequestConfig, 'url'>;
  },
) =>
  useQuery<AxiosResponse<ResponseType>, AxiosError<ErrorType>, ResponseType>(
    queryKey,
    () => apiInstance.get(`api/${path}`, options?.requestConfig),
    { select: (response) => response.data },
  );

const useAuth = (): string | undefined => {
  const { authStore } = useContext(globalContext);
  return authStore.token;
};

export const useAuthorizedApiQuery = <ResponseType, ErrorType>(
  queryKey: QueryKey,
  path: string,
  options?: UseQueryOptions<AxiosResponse<ResponseType>, AxiosError<ErrorType>, ResponseType> & {
    requestConfig?: Omit<AxiosRequestConfig, 'url' | 'header'>;
  },
) => {
  const token = useAuth();
  const config: AxiosRequestConfig = {
    ...(options?.requestConfig || {}),
    ...{ headers: { Authorization: `Bearer ${token}` } },
  };
  return useQuery<AxiosResponse<ResponseType>, AxiosError<ErrorType>, ResponseType>(
    queryKey,
    () => apiInstance.get(`api/${path}`, config),
    { select: (response) => response.data },
  );
};

export default useApiQuery;
