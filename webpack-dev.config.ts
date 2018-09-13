import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import webpackNodeExternals from 'webpack-node-externals';
import commonConfig from './webpack.config';

export const config: Configuration = merge(commonConfig, {
	mode: 'development',
	devtool: 'inline-source-map',
});

export default config;
