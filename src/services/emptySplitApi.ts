import { SerializedError } from '@reduxjs/toolkit';
import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

type Args = {
  url: string;
  method: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
};

const axiosBaseQuery =
  ({ baseUrl }: { baseUrl: string } = { baseUrl: '' }): BaseQueryFn<Args, unknown, SerializedError | undefined> =>
  async (args: Args) => {
    const { url, method, data } = args;
    try {
      const result = await axios({ url: baseUrl + url, method, data });
      return { data: result.data, meta: { response: result } };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: { code: err.response?.status + '', message: err.response?.data?.error },
      };
    }
  };

const emptySplitApi = createApi({
  reducerPath: 'spriteApi',
  baseQuery: axiosBaseQuery({ baseUrl: '/api/v1/' }),
  endpoints: () => ({}),
});

export default emptySplitApi;
