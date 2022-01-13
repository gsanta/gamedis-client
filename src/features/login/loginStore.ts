const loginStore = {
  setJwtToken(token: string) {
    localStorage.setItem('JwtToken', token);
  },

  getJwtToken(): string | null {
    return localStorage.getItem('JwtToken');
  },
};

export default loginStore;
