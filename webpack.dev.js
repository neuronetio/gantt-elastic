const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = [
  {
    mode: 'development',
    entry: './src/GanttElastic.vue',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'GanttElastic.umd.js',
      library: 'GanttElastic',
      libraryTarget: 'umd',
      libraryExport: 'default'
    },
    externals: ['vue'],
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
  },
];
