import emptySplitApi from '@/services/emptySplitApi';

export interface UserDto {
  email: string;
  password: string;
}

const loginApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<unknown, UserDto>({
      query: (arg) => {
        debugger;
        return {
          url: 'auth/login',
          method: 'post',
          data: { user: arg },
        }
      }
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = loginApi;
