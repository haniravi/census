const reference = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    type: {
      type: 'string',
      pattern: 'Node/Organization'
    }
  }
}

const attributes = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    additionalName: {
      type: 'string'
    }
  },
  required: [
    'name'
  ]
}

module.exports = {
  reference,
  attributes
}
