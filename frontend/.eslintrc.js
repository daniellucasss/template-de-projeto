module.exports = {
  extends: [
    '@jeansarlon/eslint-config-base',
    '@jeansarlon/eslint-config-react',
  ],
  env: {
    browser: true,
    jest: true
  },
  globals: {
    browser: true,
    cy: true,
    Cypress: true
  },
  overrides: [],
  settings: {
    'import/core-modules': [
    ]
  }
}
