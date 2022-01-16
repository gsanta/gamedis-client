import { AxiosResponse } from 'axios';
import useApiMutation from '../../hooks/useApiMutation';
import store from '../../ui/store';
import { userActions } from '../../user/userReducer';

export interface LoginRequestDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  data: {
    attributes: {
      email: string;
    };
  };
}

const onLoginSuccess = (data: AxiosResponse<LoginResponseDto>) => {
  const authData = data?.headers.authorization?.split(' ');

  if (data && authData?.length === 2) {
    const { email } = data?.data?.data?.attributes;
    const token = authData[1];
    store.dispatch({ type: userActions.setUser, payload: { token, email } });
  }
};

const useLogin = () => {
  const apiMutation = useApiMutation<LoginResponseDto>('v1/auth/login', 'post', { onSuccess: onLoginSuccess });
  return apiMutation;
};

const loginApi = {
  useLogin,
};

export default loginApi;
