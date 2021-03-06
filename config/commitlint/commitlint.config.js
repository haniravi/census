const types = [
  'star', // feature
  'sparkles', // improvement
  'pill', // hotfix
  'ambulance', // fix
  'golf', // test
  'recycle', // refactoring
  'wrench', // chore
  'hammer', // hard chore
  'tophat', // style
  'memo', // documentation
  'gear', // config
  'bookmark', // version
  //
  'construction', // wip
  'rewind', // revert
  // extra
  'tv', // demo
  'unicorn', // fantasy land
  'alembic', // experiments
  'construction', // wip
  'book', // breaking changes
  'robot', // automation
  'tada', // initial commit
  'owl', // knowledge organization
  'dolls', // mocks
  'candy', // eyecandy
  'package' // package
]

/**
 * Commit Lint Config Emoji Log
 *
 * Rules are made up by a name and a configuration array.
 * The configuration array contains:
 * 1. Level:      | [0..2] | 0 = disables | 1 = considered a warning | 2 an error for the rule.
 * 2. Applicable: | always/never | never inverts the rule.
 * 3. Value:      | value to use for this rule.
 *
 * @link https://github.com/marionebl/commitlint/blob/master/docs/reference-rules.md
 */

module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^:(.*\w*): (.*)$/,
      headerCorrespondence: ['type', 'subject']
    }
  },
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'], // ?
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-empty': [2, 'never'],
    'type-case': [2, 'always', 'lower-case'],
    'type-enum': [2, 'always', types]
  }
}
