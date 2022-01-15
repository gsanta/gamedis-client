import useApiMutation from '../../hooks/useApiMutation';
import loginStore from './loginStore';

export interface UserDto {
  email: string;
  password: string;
}

const useLogin = () => {
  const apiMutation = useApiMutation('v1/auth/login', 'post');
  const { data } = apiMutation;

  const authData = data?.headers.authorization?.split(' ');

  if (authData?.length === 2) {
    loginStore.setJwtToken(authData[1]);
  }

  return apiMutation;
};

const loginApi = {
  useLogin,
};

export default loginApi;
