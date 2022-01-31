import { globalContext } from '@/globalContext';
import { useContext } from 'react';

const isClientSide = typeof window !== 'undefined';

const useAuthFromLocalStorage = () => {
  const { authStore } = useContext(globalContext);

  if (isClientSide && !authStore.isLoggedIn) {
    authStore.initUser();
  }
};

export default useAuthFromLocalStorage;
