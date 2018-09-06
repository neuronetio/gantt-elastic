import resolve from 'rollup-plugin-node-resolve';
import VuePlugin from 'rollup-plugin-vue'
// import commonjs from 'rollup-plugin-commonjs';
// import uglify from 'rollup-plugin-uglify-es';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/elastigantt.js',
    format: 'iife', // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true,
    name: 'ElastiganttApp'
  },
  plugins: [
    resolve(), // tells Rollup how to find date-fns in node_modules
    VuePlugin(),
    // commonjs(),  converts date-fns to ES modules
    // production && uglify()  minify, but only in production
  ],
  watch: {
    include: 'src/**'
  }
};
