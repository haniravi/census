import test from 'ava'

import records from '.'

test('exports', t => {
  t.true(Array.isArray(records))
})
