module.exports = {
  $id: '/Edge/knows',
  type: 'object',
  properties: {
    self: { $ref: '#/definitions/reference' },
    nodes: { $ref: '#/definitions/nodes' }
  },
  required: [
    'self',
    'nodes'
  ]
}

module.exports.definitions = require('./definitions')
