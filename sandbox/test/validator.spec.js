import test from 'ava'

import Ajv from 'ajv'

import Validator from '../lib/validator'

// hooks

test.beforeEach(t => {
  const ajv = new Ajv()

  const schema = {
    properties: {
      a: { type: 'number' }
    }
  }

  t.context = {
    ajv,
    schema
  }
})

// tests

test('signature', async t => {
  const { ajv, schema } = t.context

  t.is(typeof Validator, 'function')

  const validateWith = Validator(ajv)
  t.is(typeof validateWith, 'function')

  const validate = validateWith(schema)
  t.is(typeof validate, 'function')

  await t.notThrowsAsync(() => validate({ a: 1 }))
  await t.throwsAsync(() => validate({ a: 'x' }))
})
