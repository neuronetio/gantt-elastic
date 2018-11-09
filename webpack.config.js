const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = [
  {
    mode: process.env.NODE_ENV || 'production',
    entry: './src/Elastigantt.vue',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'component.js'
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        }, {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader']
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  }, {
    mode: process.env.NODE_ENV || 'production',
    entry: './src/standalone.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.vue.js'
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        }, {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader']
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  }
];
