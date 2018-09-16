import * as fs from 'fs-extra';
import merge from 'lodash.merge';
import path from 'path';

export const config = merge(
	fs.readJSONSync(path.resolve('config/default.json')),
	fs.readJSONSync(path.resolve(`config/${process.env.NODE_ENV || 'development'}.json`)),
);
