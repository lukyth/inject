'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: './src/index.js', // string | object | array
  // Here the application starts executing
  // and webpack starts bundling

  output: {
    // options related how webpack emits results

    path: path.resolve(__dirname, 'dist'), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: 'bundle.js' // string
    // the filename template for entry chunks
  },

  module: {
    // configuration regarding modules

    rules: [
      // rules for modules (configure loaders, parser options, etc.)

      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        // matching conditions, each accepting regular expression or string
        // test and include behave equal, both must be matched
        // exclude must not be matched (takes preferrence over test and include)
        // Best practices:
        // - Use RegExp only in test and for filename matching
        // - Use arrays of absolute paths in include and exclude
        // - Try to avoid exclude and prefer include

        loader: 'babel-loader',
        // the loader which should be applied, it'll be resolve relative to the context
        // -loader suffix is no longer optional in Webpack 2 for clarity reasons
        // see webpack 1 upgrade guide

        options: {
          presets: ['es2015'],
          plugins: [
            ['transform-react-jsx', { pragma: 'h' }]
          ]
        }
        // options for the loader
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loaders: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[local]__[path][name]__[hash:base64:5]',
              modules: 1,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9' // React doesn't support IE8 anyway
                  ]
                })
              ]
            }
          }
        ]
      },
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.json$/
        ],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  },

  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    // directories where to look for modules

    extensions: ['.js', '.json', '.jsx', '.css']
    // extensions that are used
  },

  devtool: 'source-map', // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.

  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory

  target: 'web' // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules
}
