module.exports = function (api) {
	api.cache(true);

	const presets = ['babel-preset-expo'];
	const plugins = [
		[
			"babel-plugin-styled-components",
			'module-resolver',
			{
				alias: {
					src: './src',
				},
			}
		],
	]
	return {presets, plugins};
};
