import { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
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

export default useApiQuery;
