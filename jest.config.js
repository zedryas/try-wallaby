module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsDom',
  testMatch: ['**/*.test.ts?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
}
