const glob = require('glob')

const PATH_MASK = `${__dirname}/lib/**/*.json`

module.exports = glob
  .sync(PATH_MASK)
  .map(require)
