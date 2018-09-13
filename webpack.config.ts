import { Configuration } from 'webpack';
import webpackNodeExternals from 'webpack-node-externals';

export const commonConfig: Configuration = {
	entry: './src',
	target: 'node',
	externals: [webpackNodeExternals()],
	resolve: {
		extensions: [ '.ts', '.js', '.json' ],
	},
	output: {
		path: `${__dirname}/dist`,
		filename: 'biz-vue-server.min.js',
	},
	module: {
		rules: [
			{
				test: /.ts$/,
				loader: 'awesome-typescript-loader',
				exclude: /node_modules/,
			},
		],
	},
};

export default commonConfig;
