import test from 'ava';
import atomizer from '.';

const FIXTURE = {
	config: {
		module: {
			loaders: [
				{
					rule: {
						test: /\.(css|less|s[ac]ss|styl)$/,
						loader: 'style-loader',
					},
				},
			],
		},
	},
	env: {
		isProd: false,
	},
	helpers: {
		getLoadersByName: config => config.module.loaders,
	},
};

test('properly adds itself', t => {
	const actual = atomizer(
		FIXTURE.config,
		FIXTURE.env,
		FIXTURE.helpers,
		{
			configPath: 'foo',
			minimize: false,
			test: /\.jsx?$/,
		},
	);

	const expected = {
		module: {
			loaders: [
				{
					oneOf: [
						{
							test: /\.(css|less|s[ac]ss|styl)$/,
							loader: 'style-loader',
						},
						{
							loader: 'webpack-atomizer-loader',
							options: {
								configPath: 'foo',
								minimize: false,
							},
							test: /\.jsx?$/,
						},
					],
				},
			],
		},
	};

	t.deepEqual(actual, expected);
});
