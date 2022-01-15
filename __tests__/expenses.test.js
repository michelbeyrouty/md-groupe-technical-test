'use strict';
const supertest = require('supertest');
const app = require('../config/app');
const server = require('../server');
const mongo = require('../config/mongo');

const request = supertest(app);

describe('Test expenses', () => {

  beforeAll(() => {
    mongo.connectDB();
  });

  afterAll(() => {
    mongo.disconnectDB();
    server.close();
  });

  test('Post expense', async () => {

    const payload = {
      'description': 'd',
      'type': 'Entertainment',
      'value': 1,
    };

    const response = await request.post('/expenses').send(payload);
    expect(response.status).toBe(200);

  }, 30000);

});

