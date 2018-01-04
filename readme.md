# preact-cli-plugin-atomizer [![Build Status](https://travis-ci.org/vinspee/preact-cli-plugin-atomizer.svg?branch=master)](https://travis-ci.org/vinspee/preact-cli-plugin-atomizer)

>


## Install

in your [preact-cli](https://github.com/developit/preact-cli) app:

```
$ yarn add -D preact-cli-plugin-atomizer
```


## Usage

in `preact.config.js`, pass your [atomizer loader config](https://github.com/acss-io/webpack-atomizer-loader#usage):

```js
import atomizer from 'preact-cli-plugin-atomizer';

export default (config, env, helpers) => {
	atomizer(
		config,
		env,
		helpers,
		{
			test: /\.jsx?$/,
			configPath: './yourAtomicConfig.js',
		}
	);
};
```


## License

MIT © [Vince Speelman](https://github.com/vinspee)
