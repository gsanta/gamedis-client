import { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { useMutation, UseMutationOptions, UseMutationResult } from 'react-query';
import apiInstance from '../apiInstance';

const useApiMutation = <ResponseType, ErrorType, RequestDataType>(
  path: string,
  method: Method,
  options?: UseMutationOptions<AxiosResponse<ResponseType>, AxiosError<ErrorType>, RequestDataType> & {
    requestConfig?: Omit<AxiosRequestConfig, 'url' | 'method' | 'data'>;
  },
): UseMutationResult<AxiosResponse<ResponseType>, AxiosError<ErrorType>, RequestDataType> =>
  useMutation(
    (data) =>
      apiInstance.request({
        url: `api/${path}`,
        method,
        data,
        ...options?.requestConfig,
      }),
    options,
  );

export default useApiMutation;
