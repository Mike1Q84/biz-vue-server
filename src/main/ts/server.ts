import bodyParser from 'body-parser';
import express, { Application, Router } from 'express';
import { Inject, Service } from 'typedi';

import { HealthRouter } from '~routes';
import { Env } from '~server.types';

@Service()
export class Server {
	private static readonly app: Application = express();

	constructor(
		@Inject('env') private readonly env: Env,
		@Inject('port') private readonly port: number,
		private healthRouter: HealthRouter,
	) {
		const router = Router({ strict: true });
		router.use(healthRouter.router);

		Server.app.use(bodyParser.json());
		Server.app.use(router);
	}

	async start(): Promise<void> {
		console.log(`Server is running on port ${this.port}`);
		Server.app.listen(this.port);
	}
}
