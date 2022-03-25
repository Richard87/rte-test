const withTM = require('next-transpile-modules')([
  'react-syntax-highlighter'
])

module.exports = withTM({
  reactStrictMode: true,
  experimental: {
    emotion: {
      sourceMap: true,
      autoLabel: 'always',
    },
  }
})
