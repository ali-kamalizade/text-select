import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import {terser} from "rollup-plugin-terser";

export default {
	input: 'src/index.ts',
	output: [
		{
			file: pkg.main,
			format: 'cjs'
		},
		{
			file: pkg.module,
			format: 'es'
		},
		{
			file: pkg.browser,
			format: 'iife',
			name: pkg.name
				.split('-')
				.map(word => word[0].toUpperCase() + word.slice(1))
				.join('')
		}
	],
	external: [
		...Object.keys(pkg.dependencies || {})
	],
	plugins: [
		typescript({
			typescript: require('typescript'),
		}),
		terser()
	]
};
