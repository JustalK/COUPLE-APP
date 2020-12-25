module.exports = function (api) {
	api.cache(true);

	const presets = ['babel-preset-expo'];
	const plugins = [
		[
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
