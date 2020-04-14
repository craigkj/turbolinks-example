import resolve from "@rollup/plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: "turbo.js",
  output: {
    dir: "public",
    format: "cjs",
  },
  plugins: [resolve(), commonjs(), uglify()],
};
