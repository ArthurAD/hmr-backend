const path = require('path');
const webpack = require('webpack');

const resolve = f => path.resolve(__dirname, '..', f);

module.exports = {
	context: resolve('client/dev'),
	entry: [
		'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
		resolve('config/dev-client'),
		'./main'
	],
	output: {
		path: resolve('client/public/dist'),
		publicPath: '/dist/',
		filename: 'build.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],
	performance: {
		hints: false
	},
	devtool: '#source-map',
	stats: 'verbose'
};
