module.exports = w => ({
  files: ['src/**/*.ts', '!src/**/*.test.ts'],
  tests: ['src/**/*.test.ts'],
  env: {
    type: 'node',
    runner: 'node'
  },
  testFramework: 'jest',
  compilers: {
    '**/*.ts?(x)': w.compilers.typeScript({isolatedModules: true, module: 'CommonJs', target: 'es6'})
  }
})
