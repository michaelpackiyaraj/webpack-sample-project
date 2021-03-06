var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');

var BUILD_DIR = path.resolve(__dirname, 'dist');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  
  entry: {
    app: APP_DIR + '/Main.js' 
  }, 

 
  output: {
    path: BUILD_DIR,
    filename: 'bundle.[hash].js',
    //publicPath: '/'
  },
 
  module: {
    rules: [
      {
        test: /\.js?$/,
        include : APP_DIR,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'es2015',
            '@babel/preset-env'
          ]
        }
      }
    ]
  },

  plugins:[
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.bundle.js',
        minChunks:  function(module, count) {
            var context = module.context;
            return context && context.indexOf('node_modules') >= 0;
        },
    }),
     new HtmlWebpackPlugin({
        title: 'My Product App',
        filename: 'index.html', //output file name
        template: './src/index.html' //input file
      })
  ],
  
  //debug, es6 to es5 mapping
  devtool: 'source-map',
 

  devServer: {
    contentBase: APP_DIR,
    compress: true,
    port: 2019,

    historyApiFallback: {
      index: '/'
    }
  }

};

module.exports = config;