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

    const postPayload = {
      'description': 'd',
      'type': 'Entertainment',
      'value': 1,
    };

    const response = await request.post('/expenses', postPayload);
    console.log(response);
    expect(response.statusCode).toBe(200);

  });

});

