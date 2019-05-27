import test from 'ava'

import isFunction from './helpers/is-function'

import x from '..'

test('x', t => {
  t.true(isFunction(x), 'valid type')
})
