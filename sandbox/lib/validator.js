const { curry } = require('ramda')

const { assign } = Object

const errorFrom = validation => {
  const err = new Error('Unprocessable Entity')
  return assign(err, validation)
}

/**
 * Async validation using given `ajv` instance
 *
 * @param {Ajv}    {ajv}
 * @param {Schema} {schema}
 * @param {Object} {input}
 *
 * @returns {Promise<Object>} - valid data
 */

function Validator (ajv, schema, input) {
  // avoid input mutation
  const data = Object.assign({}, input)

  const validate = ajv.compile(schema)

  return validate(data)
    ? Promise.resolve(data)
    : Promise.reject(errorFrom(validate))
}

// expose curried

module.exports = curry(Validator)
