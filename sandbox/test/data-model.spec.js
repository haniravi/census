import test from 'ava'

import R from 'ramda'

import Ajv from 'ajv'

import Validator from '../lib/validator'

const schemas = require('../schemas')
const mockRefs = require('../mocks')

//

const getMockFor = ({ type, id }) =>
  require(`../mocks/${type}/${id}.json`)

//

const ajvOptions = {
  schemas,
  removeAdditional: 'all'
}

const ajv = new Ajv(ajvOptions)
const validateWith = Validator(ajv)

// macro

const check = async (t, reference) => {
  const data = getMockFor(reference)

  const validate = data => {
    const schema = { $ref: reference.type }
    const input = R.clone(data)

    return validateWith(schema, input)
  }

  await validate(data)
    .then(res => t.deepEqual(res, data))
}

mockRefs.forEach(ref => test(`${ref.id}`, check, ref))
