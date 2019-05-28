import test from 'ava'

import isFunction from './helpers/is-function'

import y from '..'

test('signature', t => {
  t.true(isFunction(y), 'valid type')

  t.true(isFunction(y()), 'valid return type')
})
