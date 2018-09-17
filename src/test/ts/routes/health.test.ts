import { assert } from 'chai';
import { Application } from 'express';
import request from 'supertest';

import { Server } from '~server';
import { getContainer } from '../test';

describe('Health Routes', () => {
	let app: Application;

	before(async () => {
		const ci = getContainer();
		const server = ci.get(Server);
		app = server.app;
	});

	it('GET /health for liveness status', async () => {
		request(app)
			.get('/health')
			.end((err, res) => {
				assert(res.status === 200);
				assert(res.body.alive === true);
			});
	});
});
