import { ContainerInstance } from 'typedi';

import { config } from '~config';
import { Env } from '~server.types';

export class ServerDiModule {
	constructor(private ci: ContainerInstance) {
		this.ci.set('env', ServerDiModule.provideEnv());
		this.ci.set('mongo', ServerDiModule.provideMongo());
		this.ci.set('port', ServerDiModule.providePort());
	}

	private static provideEnv(): Env {
		switch (process.env.NODE_ENV) {
			case 'production':
				return 'Production';
			case 'development':
			default:
				return 'Development';
		}
	}

	private static provideMongo(): string {
		return config.mongoUri;
	}

	private static providePort(): number {
		return config.httpPort;
	}
}
