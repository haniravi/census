import test from 'ava'

import Ajv from 'ajv'

import Validator from '../lib/validator'

const schemas = require('../schemas')

// mocks
const IRON_MAN = require('../mocks/Node/Person/IRON_MAN.json')
const TONY_STARK = require('../mocks/Node/Person/TONY_STARK.json')
const AVENGERS = require('../mocks/Node/Organization/AVENGERS.json')

//

const ajvOptions = {
  schemas,
  removeAdditional: 'all'
}

const ajv = new Ajv(ajvOptions)
const validateAs = $ref => Validator(ajv, { $ref })

// macro

test('Node/Person', async t => {
  const validate = validateAs('Node/Person')

  await validate(IRON_MAN)
    .then(body => t.deepEqual(body, IRON_MAN))

  await validate(TONY_STARK)
    .then(body => t.deepEqual(body, TONY_STARK))
})

test('Node/Organization/AVENGERS', async t => {
  const validate = validateAs('Node/Organization')

  await validate(AVENGERS)
    .then(body => t.deepEqual(body, AVENGERS))
})

// const check = async (t, reference) => {
//   const data = getMockFor(reference)
//
//   const validate = data => {
//     const schema = { $ref: reference.type }
//     const input = R.clone(data)
//
//     return validateWith(schema, input)
//   }
//
//   await validate(data)
//     .then(res => t.deepEqual(res, data))
// }
//
// mockRefs.forEach(ref => test(`${ref.id}`, check, ref))
