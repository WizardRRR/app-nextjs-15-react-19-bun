import ORDER_PROPERTIES from './_stylelint/order-properties.js'

/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx',
    '.next/**/*',
    'node_modules/**/*'
  ],
  plugins: ['stylelint-order'],
  rules: {
    'selector-class-pattern': [
      '^[a-z]+([A-Z][a-z]+)*$',
      { message: 'Only camelCase' }
    ],
    'keyframes-name-pattern': [
      '^[a-z]+([A-Z][a-z]+)*$',
      { message: 'Only camelCase' }
    ],
    'order/properties-order': ORDER_PROPERTIES,
    'no-unknown-animations': [
      true,
      { message: 'The animation does not exist in the file' }
    ],
    'color-function-notation': ['modern', { ignore: ['with-var-inside'] }],
    'color-named': 'never',
    'declaration-no-important': [
      true,
      { message: 'The use of !important is not allowed' }
    ],
    'declaration-property-unit-allowed-list': [
      {
        'font-size': ['rem', 'em'],
        '/^animation/': 's',
        'line-height': ['rem'],
        '/^padding/': ['px', 'auto', 'rem'],
        '/^margin/': ['px', 'auto', 'rem']
      },
      {
        message: (string, value) => `${string} should not be ${value}`
      }
    ],
    'media-feature-name-unit-allowed-list': [
      {
        '/width/': ['rem', 'em']
      },
      {
        message: 'Only rem and em can be used'
      }
    ],
    'declaration-empty-line-before': 'never',
    'comment-empty-line-before': 'always',
    'max-nesting-depth': [3, { ignore: ['pseudo-classes'] }]
  }
}
