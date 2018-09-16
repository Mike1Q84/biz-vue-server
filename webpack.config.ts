import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import webpackNodeExternals from 'webpack-node-externals';

export const commonConfig: Configuration = {
	entry: './src/main/ts',
	target: 'node',
	externals: [webpackNodeExternals()],
	resolve: {
		extensions: [ '.ts', '.js', '.json' ],
		plugins: [
			new TsconfigPathsPlugin({ configFile: './tsconfig.json' }),
		],
	},
	output: {
		path: __dirname,
		filename: 'dist/biz-vue-server.min.js',
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
	plugins: [
		new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			openAnalyzer: false,
			reportFilename: 'build/size-report.html',
		}),
	],
};

export default commonConfig;
