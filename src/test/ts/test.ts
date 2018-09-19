import mongoose from 'mongoose';
import 'reflect-metadata';
import { Container, ContainerInstance } from 'typedi';

import { ServerDiModule } from '~dimodule';

export const getContainer = () => {
	const ci: ContainerInstance = Container.of(undefined);
	new ServerDiModule(ci);

	return ci;
};

// MongoDB test helper
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

before(async () => {
	const ci = getContainer();
	const mongoUri = ci.get('mongo');
	mongoose.connect(`${mongoUri}_test`);
	mongoose.connection
		.once('open', () => console.log('MongoDB successfully connected.'))
		.on('error', err => console.error(err));
});
