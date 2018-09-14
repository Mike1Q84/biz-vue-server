import { Request, Response } from 'express';

export class HealthController {
	liveness(req: Request, res: Response) {
		res.send({ alive: true });
	}
}
