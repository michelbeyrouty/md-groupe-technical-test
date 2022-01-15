'use strict';
const request = require('supertest');
const app = require('../config/app');
const expenseControllers = require('../api/controllers');

describe('Test expenses', () => {

  // beforeAll(() => {
  //   mongoDB.connect();
  // });

  test('Post expense', async () => {

    // const postPayload = {
    //   'description': 'd',
    //   'type': 'Entertainment',
    //   'value': 1,
    // };

    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);

  });

  // afterAll((done) => {
  //   mongoDB.disconnect(done);
  // });

});

