import test from 'ava'

import R from 'ramda'

import Ajv from 'ajv'

import Validator from '../lib/validator'

const schemas = require('../schemas')
const ajv = new Ajv({ schemas })

const validateWith = Validator(ajv)

const tony = {
  ref: {
    id: 'tony-stark',
    type: 'Person'
  },
  relations: {
    isMemberOf: [
      {
        id: 'avengers',
        type: 'Organization'
      }
    ]
  },
  attributes: {
    givenName: 'Anthony',
    familyName: 'Stark',
    additionalName: 'Iron Man',
    gender: 'male'
  }
}

const schema = {
  allOf: [
    { $ref: 'entity.json' }
  ]
}

const validate = validateWith(schema)
const invokeWith = input => () => validate(input)

test('invalid', async t => {
  const empty = {}
  await t.throwsAsync(invokeWith(empty))

  const notEnoughProps = R.pick(['ref'], tony)
  await t.throwsAsync(invokeWith(notEnoughProps))
})

test('valid', async t => {
  const invoke = () => validate(tony)

  await t
    .notThrowsAsync(invoke)
    .then(console.log)
})
