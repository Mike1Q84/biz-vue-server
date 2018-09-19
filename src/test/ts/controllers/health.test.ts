import { assert } from 'chai';
import httpMocks from 'node-mocks-http';

import { HealthController } from '~controllers';
import { getContainer } from '../test';

describe('Health Controller', () => {
	let healthController: HealthController;

	before(() => {
		const ci = getContainer();
		healthController = ci.get(HealthController);
	});

	it('GET /health for liveness status', async () => {
		const req = httpMocks.createRequest({
			method: 'GET',
			url: '/health',
		});
		const res = httpMocks.createResponse();

		healthController.liveness(req, res);

		assert(res.statusCode === 200);
		assert(res._getData().alive === true);
	});
});
