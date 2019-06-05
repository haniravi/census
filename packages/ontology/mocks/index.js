const glob = require('glob')

const PATH_MASK = `${__dirname}/**/*.json`

module.exports = glob
  .sync(PATH_MASK)
  .map(require)
