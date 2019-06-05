const Person = require('./Node/Person')
const Organization = require('./Node/Organization')

const isMemberOf = require('./Edge/isMemberOf')
const hasMember = require('./Edge/hasMember')
const knows = require('./Edge/knows')

module.exports = [
  Person,
  Organization,
  isMemberOf,
  hasMember,
  knows
]
