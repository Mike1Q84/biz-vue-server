import { Router } from 'express';
import { Service } from 'typedi';

import { HealthController } from '~controllers'

@Service()
export class HealthRouter {
	private static readonly _router: Router = Router({ strict: true });

	constructor(healthController: HealthController) {
		HealthRouter._router.get('/health', healthController.liveness.bind(healthController));
	}

	get router(): Router {
		return HealthRouter._router;
	}
}
