import { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import { QueryKey, useQuery, UseQueryOptions } from 'react-query';
import apiInstance from '../apiInstance';
import authStore from '../features/user/authStore';

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

export const useAuthorizedApiQuery = <ResponseType, ErrorType>(
  queryKey: QueryKey,
  path: string,
  options?: UseQueryOptions<AxiosResponse<ResponseType>, AxiosError<ErrorType>, ResponseType> & {
    requestConfig?: Omit<AxiosRequestConfig, 'url' | 'header'>;
  },
) => {
  const config: AxiosRequestConfig = {
    ...(options?.requestConfig || {}),
    ...{ headers: { Authorization: `Bearer ${authStore.getUser()}` } },
  };
  return useQuery<AxiosResponse<ResponseType>, AxiosError<ErrorType>, ResponseType>(
    queryKey,
    () => apiInstance.get(`api/${path}`, config),
    { select: (response) => response.data },
  );
};

export default useApiQuery;
