/**
 * This is config file for tests using node env - shortly tests of code not using window (i.e. fetchUtils)
 */
var config = require('./jest.config')
config.testMatch = [
    "<rootDir>/src/lib/**/__tests__/**/*.js",
]
config.testPathIgnorePatterns = [
    "images.js", // image testing
]
config.coverageDirectory = "coverage"

console.log('RUNNING TESTS')
module.exports = config
