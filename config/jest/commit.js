const base = require ('./base')
const basecov = require ('./basecov')

module.exports = {
  ...base,
  coverageReporters: ['text'],
  coverageThreshold: {
    global: {
      lines: 95,
      branches: 90,
      functions: 95,
      statements: 95,
    }
  }
}
