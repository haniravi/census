module.exports = {
  $id: '/Edge/hasMember',
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
