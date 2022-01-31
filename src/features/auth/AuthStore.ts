import { action, makeObservable, observable } from 'mobx';
import { enableStaticRendering } from 'mobx-react-lite';
import { useMemo } from 'react';
enableStaticRendering(typeof window === 'undefined');

let authStore: AuthStore;

export default class AuthStore {
  private userKey = 'user';

  email: string | null = null;

  token: string | null = null;

  constructor() {
    this.initUser();
    makeObservable(this, {
      email: observable,
      token: observable,
      login: action,
      logout: action,
    });
  }

  get isLoggedIn(): boolean {
    return !!this.token;
  }

  login = (email: string, authHeader: string) => {
    const authData = authHeader?.split(' ');

    if (authData?.length === 2) {
      const token = authData[1];
      this.email = email;
      this.token = token;

      localStorage.setItem(this.userKey, JSON.stringify({ email, token }));
    }
  };

  logout = () => {
    localStorage.removeItem(this.userKey);
    this.email = null;
    this.token = null;
  };

  hydrate = () => {};

  initUser = (): void => {
    try {
      const userItem = localStorage.getItem(this.userKey);
      if (userItem) {
        const { email, token } = JSON.parse(userItem);
        this.email = email;
        this.token = token;
      }
    } catch (e) {
      console.error('Failed to access localstorage.', e);
    }
  };
}

function initializeStore(initialData = null) {
  const store = authStore ?? new AuthStore();

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
  if (initialData) {
    store.hydrate();
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return store;
  // Create the store once in the client
  if (!authStore) authStore = store;

  return store;
}

export function useStore() {
  const store = useMemo(() => initializeStore(), []);
  return store;
}
