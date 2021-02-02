// commitlint.config.js
module.exports = {
    extends: ['@commitlint/config-conventional'], // => commitlint/config-conventional
    'rules': {
      'references-empty': [2, 'never'],
    },
    parserPreset: {
      parserOpts: {
        issuePrefixes: ['DBAAS-']
      }
    },
};
