module.exports = {
  preset: 'ts-jest',
  rootDir: '../../',
  testEnvironment: 'jsDom',
  testMatch: ['**/*.test.ts?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
}
