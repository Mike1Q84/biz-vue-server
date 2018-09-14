import { ContainerInstance } from 'typedi';
import { config } from '~src/config';
import { Env } from '~src/server.types';

export class ServerDiModule {
	constructor(private ci: ContainerInstance) {
		this.ci.set('env', ServerDiModule.provideEnv());
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

	private static providePort(): number {
		return config.httpPort;
	}
}
