const reference = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    type: {
      type: 'string',
      pattern: 'Edge/knows'
    }
  }
}

const nodes = {
  type: 'object',
  properties: {
    subject: {
      $ref: '/Node/Person#/definitions/reference'
    },
    object: {
      $ref: '/Node/Person#/definitions/reference'
    }
  },
  required: [
    'subject',
    'object'
  ]
}

module.exports = {
  reference,
  nodes
}
