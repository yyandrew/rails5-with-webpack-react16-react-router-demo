const { environment } = require('@rails/webpacker')

module: {
  // configuration regarding modules
  rules: [
    // rules for modules(configure exclude, loader, parser options)
    {
      test: /\.js(\.erb)?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['env', { modules: false }]
        ]
      }
    }
  ]
}

environment.loaders.get('sass').use.splice(-1, 0, {
  loader: 'resolve-url-loader',
  options: {
    attempts: 1
  }
})

module.exports = environment
