import adapter from '@sveltejs/adapter-auto'
//import path from 'path'

export default {
	kit: {
		adapter: adapter(),
		alias: {
			// alias_path: path.resolve('real_path'),
		},
	},
}
