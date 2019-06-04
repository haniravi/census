const reference = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    type: {
      type: 'string',
      pattern: 'Edge/hasMember'
    }
  }
}

const nodes = {
  type: 'object',
  properties: {
    subject: {
      $ref: '/Node/Organization#/definitions/reference'
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
