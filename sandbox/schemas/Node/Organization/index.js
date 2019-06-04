module.exports = {
  $id: 'Node/Organization',
  type: 'object',
  properties: {
    self: { $ref: '#/definitions/reference' },
    attributes: { $ref: '#/definitions/attributes' }
  },
  required: [
    'self',
    'attributes'
  ]
}

module.exports.definitions = require('./definitions')
