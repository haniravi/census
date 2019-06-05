const Person = require('./lib/Node/Person')
const Organization = require('./lib/Node/Organization')

const isMemberOf = require('./lib/Edge/isMemberOf')
const hasMember = require('./lib/Edge/hasMember')
const knows = require('./lib/Edge/knows')

module.exports = [
  Person,
  Organization,
  isMemberOf,
  hasMember,
  knows
]
