export type UserAuthData = {
  token: string;
  email: string;
};

const userKey = 'UserAuthData';

const authStore = {
  setUser(authData: UserAuthData) {
    localStorage.setItem(userKey, JSON.stringify(authData));
  },

  clearUser() {
    localStorage.removeItem(userKey);
  },

  getUser(): UserAuthData | null {
    try {
      const userAuthData = localStorage.getItem(userKey);
      return userAuthData ? JSON.parse(userAuthData) : null;
    } catch (e) {
      console.error('Failed to access localstorage.');
      return null;
    }
  },
};

export default authStore;
