/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./test/setupJest.ts', './test/setupLocalStorage.ts', './test/setupMsw.ts'],
};
