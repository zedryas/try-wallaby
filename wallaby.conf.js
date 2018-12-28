module.exports = w => ({
  files: ['src/**/*.ts'],
  tests: ['src/**/*.test.ts'],
  compilers: {
    '**/*.ts?(x)': w.compilers.typeScript({isolatedModules: true})
  },
})