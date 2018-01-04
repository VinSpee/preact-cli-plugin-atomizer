'use strict';

const preactCliAtomizer = (
	config,
	env,
	helpers,
	options = {
		test: /\.((t|j)sx?|vue)$/,
	},
) => {
	if (!config) {
		throw new Error('You need to pass the webpack config to the atomizer');
	}

	// Add the loader to the configuration
	const loader = helpers.getLoadersByName(config, 'style-loader')[0];
	config.module.loaders.splice(loader.ruleIndex, 1);
	config.module.loaders.push({
		oneOf: [
			loader.rule,
			{
				test: options.test,
				loader: 'webpack-atomizer-loader',
				options: Object.assign(
					{},
					{
						configPath: options.configPath || `${env.cwd}/atomicCSSConfig.js`,
						minimize: options.minimize || env.isProd,
					},
				),
			},
		],
	});

	return config;
};

module.exports = preactCliAtomizer;
