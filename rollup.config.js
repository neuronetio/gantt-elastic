import VuePlugin from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
// import uglify from 'rollup-plugin-uglify-es';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default[
  {
    input: 'src/index.js',
    output: {
      file: 'dist/elastigantt.js',
      format: 'iife', // immediately-invoked function expression — suitable for <script> tags
      sourcemap: false,
      name: 'Elastigantt'
    },
    plugins: [
      VuePlugin(), resolve(), // tells Rollup how to find date-fns in node_modules
      // commonjs(),  converts date-fns to ES modules
      // production && uglify()  minify, but only in production
    ],
    watch: {
      include: 'src/**'
    }
  }, {
    input : 'src/standalone.js',
    output: {
      file: 'dist/elastigantt.standalone.js',
      format: 'iife', // immediately-invoked function expression — suitable for <script> tags
      sourcemap: false,
      name: 'Elastigantt'
    },
    plugins: [
      VuePlugin(), resolve(), // tells Rollup how to find date-fns in node_modules
      // commonjs(),  converts date-fns to ES modules
      // production && uglify()  minify, but only in production
    ],
    watch: {
      include: 'src/**'
    }
  }
];
