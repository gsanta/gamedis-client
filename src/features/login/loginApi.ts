import emptySplitApi from '@/services/emptySplitApi';
import { AxiosResponse } from 'axios';
import loginStore from './loginStore';

export interface UserDto {
  email: string;
  password: string;
}

const loginApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<unknown, UserDto>({
      query: (arg) => ({
        url: 'auth/login',
        method: 'post',
        data: { user: arg },
      }),
      transformResponse: (response: unknown, meta: { response: AxiosResponse }) => {
        const authHeader = meta.response.headers.authorization?.split(' ');
        if (authHeader.length === 2) {
          loginStore.setJwtToken(authHeader[1]);
        }
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

export default loginApi;

export const { useLoginMutation } = loginApi;
