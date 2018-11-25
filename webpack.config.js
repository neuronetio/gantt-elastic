const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = [
  {
    mode: 'production',
    entry: './src/bundle.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
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
          use: ['vue-style-loader', 'css-loader']
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  }
];
