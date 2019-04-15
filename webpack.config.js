const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = [
  {
    mode: 'production',
    entry: './src/bundle.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    devtool: 'source-map',
    externals: {
      vue: 'Vue'
      //vuex: 'Vuex'
      //dayjs: 'dayjs'
    },
    optimization: {
      minimize: true,
      namedModules: false,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            mangle: false
          }
        })
      ]
    },
    /*resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      }
    },*/
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader']
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  },
  {
    mode: 'production',
    optimization: {
      minimize: false,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            mangle: false
          }
        })
      ]
    },
    entry: './src/GanttElastic.vue',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'GanttElastic.umd.js',
      library: 'GanttElastic',
      libraryTarget: 'umd',
      libraryExport: 'default'
    },
    devtool: 'source-map',
    externals: {
      vue: 'Vue'
      //vuex: 'Vuex'
      //dayjs: 'dayjs'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader']
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  },
  {
    mode: 'production',
    optimization: {
      minimize: true,
      namedModules: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            mangle: false
          }
        })
      ]
    },
    entry: './src/GanttElastic.vue',
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'GanttElastic.umd.min.js',
      library: 'GanttElastic',
      libraryTarget: 'umd',
      libraryExport: 'default'
    },
    externals: {
      vue: 'Vue'
      //vuex: 'Vuex'
      //dayjs: 'dayjs'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader']
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  },
  {
    mode: 'production',
    optimization: {
      minimize: false
    },
    entry: './src/GanttElastic.vue',
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'GanttElastic.common.js',
      library: 'GanttElastic',
      libraryTarget: 'commonjs2',
      libraryExport: 'default'
    },
    externals: {
      vue: 'Vue'
      //vuex: 'Vuex'
      //dayjs: 'dayjs'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader']
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  },
  {
    mode: 'production',
    optimization: {
      minimize: true,
      namedModules: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            mangle: false
          }
        })
      ]
    },
    entry: './src/GanttElastic.vue',
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'GanttElastic.common.min.js',
      library: 'GanttElastic',
      libraryTarget: 'commonjs2',
      libraryExport: 'default'
    },
    externals: {
      vue: 'Vue'
      //vuex: 'Vuex'
      //dayjs: 'dayjs'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader']
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  }
];
