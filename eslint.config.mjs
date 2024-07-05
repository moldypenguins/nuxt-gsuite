import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
  ignores: [
    'dist',
    'node_modules',
    '**/*.md',
  ],
})
