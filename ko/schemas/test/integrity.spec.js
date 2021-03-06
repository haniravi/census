import test from 'ava'

import Ajv from 'ajv'

import mocks from '@census/mocks-marvel'

import schemas from '..'

import Validator from './helpers/_validator'

//

const ajvOptions = {
  schemas,
  removeAdditional: 'all' // require mocks to be exact
}

const ajv = new Ajv(ajvOptions)

// helpers

const nameOf = record => {
  const { id, type } = record.self
  return `${type}(${id})`
}

const schemaFor = record => {
  const { type } = record.self
  return { $ref: `/${type}` }
}

// macro

const checkFormat = async (t, record) => {
  const validate = Validator(ajv, schemaFor(record))

  await validate(record)
    .then(result => t.deepEqual(result, record))
}

// runner

for (const i in mocks) {
  const record = mocks[i]
  test(nameOf(record), checkFormat, record)
}
