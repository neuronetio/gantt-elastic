const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = [
  {
    mode: 'production',
    entry: './src/bundle.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      libraryTarget: 'umd'
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
  },
  {
    mode: 'production',
    optimization: {
      minimize: false,
    },
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
  {
    mode: 'production',
    optimization: {
      minimize: true,
    },
    entry: './src/GanttElastic.vue',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'GanttElastic.umd.min.js',
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
  {
    mode: 'production',
    optimization: {
      minimize: false
    },
    entry: './src/GanttElastic.vue',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'GanttElastic.common.js',
      library: 'GanttElastic',
      libraryTarget: 'commonjs2',
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
  {
    mode: 'production',
    optimization: {
      minimize: true
    },
    entry: './src/GanttElastic.vue',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'GanttElastic.common.min.js',
      library: 'GanttElastic',
      libraryTarget: 'commonjs2',
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
  {
    mode: 'production',
    entry: './src/components/Header.vue',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'Header.umd.js',
      library: 'Header',
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
  {
    mode: 'production',
    entry: './src/components/Header.vue',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'Header.common.js',
      library: 'Header',
      libraryTarget: 'commonjs2',
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
  }
];
