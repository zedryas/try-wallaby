const base = require ('./base')
const basecov = require ('./basecov')

module.exports = {
  ...base,
  ...basecov,
  coverageDirectory: 'lcov',
  coverageReporters: ['lcovonly'],
}
