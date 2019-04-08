/**
 * This is config file for image tests.
 * This namespace utilises __tests__/images.js files only.
 */
var config = require('./jest.config')
config.testMatch = [
    "<rootDir>/src/lib/**/__tests__/**/images.js", // Files with name images.js are for image testing
]
config.coverageDirectory = "coverage-image"

console.log('RUNNING IMAGE TESTS')
module.exports = config
