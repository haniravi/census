const reference = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    type: {
      type: 'string',
      pattern: 'Node/Person'
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
    },
    gender: {
      type: 'string',
      enum: [
        'male',
        'female'
      ]
    }
  },
  required: [
    'name',
    'gender'
  ]
}

module.exports = {
  reference,
  attributes
}
