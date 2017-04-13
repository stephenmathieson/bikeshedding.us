import webpack, { HotModuleReplacementPlugin, LoaderOptionsPlugin, DefinePlugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ReactStaticPlugin from 'react-static-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import ManifestPlugin from 'webpack-manifest-plugin'
import path from 'path'

const {
  NODE_ENV = 'development',
  SEGMENT_WRITE_KEY = 'jsyRhZD2KuSlwzhfiNlTcMszXkesCQbm'
} = process.env

const base = {
  context: __dirname,
  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[hash:12].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    new ManifestPlugin(),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
        SEGMENT_WRITE_KEY: JSON.stringify(SEGMENT_WRITE_KEY)
      }
    })
  ]
}

const development = {
  ...base,
  devtool: '#eval-module-source-map',
  module: {
    ...base.module,
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/,
        exclude: /src/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.css$/,
        include: /src/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[local]_[hash:12]',
              modules: true
            }
          }
        ]
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    ...base.plugins,
    new HtmlWebpackPlugin({ template: './src/dev.html' }),
    new HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    port: 3000
  }
}

const production = {
  ...base,
  devtool: '#source-map',
  module: {
    ...base.module,
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/,
        exclude: /src/,
        use: ExtractTextPlugin.extract([ 'css-loader' ])
      },
      {
        test: /\.css$/,
        include: /src/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[hash:12]'
              }
            },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.jpg$/,
        use: [
          'file-loader?name=[hash:12].[ext]',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    ...base.plugins,
    new ExtractTextPlugin({
      filename: '[name].[hash:12].css',
      allChunks: true
    }),
    new ReactStaticPlugin({
      routes: './src/routes.js',
      template: './src/components/HTML.js'
    }),
    new LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    })
  ]
}

if (NODE_ENV === 'development') {
  module.exports = development
} else {
  console.log(' > using production webpack config')
  module.exports = production
}
