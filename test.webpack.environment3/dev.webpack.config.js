const webpack = require('webpack');

module.exports = {
	devtool: 'cheap-eval-source-map',
	entry: [
		'webpack-hot-middleware/client'
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				},
				plugins: ['transform-runtime']
			},
			{
				test: /\.jsx$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				},
				plugins: ['transform-runtime']
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
}