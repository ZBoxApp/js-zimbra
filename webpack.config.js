var path = require('path');
module.exports = {
  entry: {
    app: ['./lib/jszimbra.js']
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'test', 'js'),
    publicPath: '/',
    filename: 'jszimbra.js'
  },
  resolve: {
    modules: [
        'node_modules',
        path.resolve(__dirname)
    ]
  }
};
