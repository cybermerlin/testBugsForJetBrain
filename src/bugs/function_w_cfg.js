/**
 *
 * @param {{START?: boolean, DEV?: boolean, BUILD?: boolean, TEST?: boolean, WATCH?: boolean}} options
 * @return {*[]|{}}
 */
export default function(options) {
	// let nodeModules = {};
	// fs.readdirSync('node_modules')
	//     .filter(function(x) {
	//         return ['.bin'].indexOf(x) === -1;
	//     })
	//     .forEach(function(mod) {
	//         nodeModules[mod] = 'commonjs ' + mod;
	//     });

	/**
	 * Environment type
	 * BUILD is for generating minified builds
	 * TEST is for generating test builds
	 * START is for start with BrowserSync (autorefresh on change any file
	 * DEV is for generating as BUILD but add sourceMap
	 * WATCH is for watching code n rebuild on change any files
	 */
	const START = !!options.START,
			DEV = !!options.DEV,
			BUILD = !!options.BUILD,
			TEST = !!options.TEST,
			WATCH = !!options.WATCH;
}
