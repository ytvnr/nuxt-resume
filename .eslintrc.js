module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'airbnb',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier',
    'vue'
  ],
  // add your custom rules here
  rules: {
    'vue/attribute-hyphenation': 0,
    'generator-star-spacing': 0,
    'object-property-newline': [0, { allowAllPropertiesOnSameLine: true }],
    'block-spacing': [2, 'always'],
    'vue/max-attributes-per-line': ['error', {
      singleline: 10,
      multiline: {
        max: 10,
        allowFirstLine: false
      }
    }]
  }
}
