const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const prodConfig = require('./prod.webpack.config');
const devConfig = require('./dev.webpack.config');

const PATHS = {
  app: path.join(__dirname, './src'),
  build: path.join(__dirname, './dist'),
};

const common = {
	entry: [
		'./src/index.jsx'
	],
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['', '.jsx', '.js'],
		modulesDirectories: ['node_modules', PATHS.app],
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.jsx$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
            {
                test: /\.scss$/,
                loader: 'style!css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!autoprefixer-loader?browsers=last 15 versions!sass'
            }
		]
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin()
	]
}

var config;

switch (process.env.NODE_ENV) {
	case 'production': 
		console.log("production");
		config = merge(common, prodConfig);
		break;
	case 'development':
		console.log('development');
		config = merge(common, devConfig);
		break;
	default:
		console.log('default');
		config = merge(common, {});
}

module.exports = validate(config);