import { action, makeObservable, observable } from 'mobx';

export default class AuthStore {
  private userKey = 'user';

  email: string | undefined;

  token: string | undefined;

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
    this.email = undefined;
    this.token = undefined;
  };

  private initUser = (): void => {
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
