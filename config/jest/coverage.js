const base = require ('./base')
const basecov = require ('./basecov')

module.exports = {
  ...base,
  ...basecov,
  coverageDirectory: 'coverage',
  coverageReporters: ['html'],
}
