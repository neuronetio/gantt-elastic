const path = require( 'path' );
const { VueLoaderPlugin } = require( 'vue-loader' );

module.exports = [
  {
    mode: process.env.NODE_ENV || 'production',
    entry: {
      bundle: './src/bundle.js'
    },
    output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: '[name].js'
    },
    /*resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },*/
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        }, {
          test: /\.css$/,
          use: [ 'vue-style-loader', 'css-loader' ]
        }
      ]
    },
    plugins: [ new VueLoaderPlugin() ]
  }
];
