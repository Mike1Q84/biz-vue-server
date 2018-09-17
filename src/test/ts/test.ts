import 'reflect-metadata';
import { Container, ContainerInstance } from 'typedi';

import { ServerDiModule } from '~dimodule';

export const getContainer = () => {
	const ci: ContainerInstance = Container.of(undefined);
	new ServerDiModule(ci);

	return ci;
};
