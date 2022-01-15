'use strict';
const supertest = require('supertest');
const app = require('../config/app');
const server = require('../server');
const mongo = require('../config/mongo');

const request = supertest(app);
let createdExpenseId = null;

describe('Test expenses', () => {

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
    createdExpenseId = response['body']['_id'];

  }, 30000);

  test('Get expense success', async () => {

    const response = await request.get(`/expenses/${createdExpenseId}`).send();
    expect(response.status).toBe(200);

  }, 30000);

  test('List expense success', async () => {

    const response = await request.get('/expenses').send();
    expect(response.status).toBe(200);

  }, 30000);

  test('Update expense success', async () => {

    const response = await request.put(`/expenses/${createdExpenseId}`).send();
    expect(response.status).toBe(200);

  }, 30000);

  test('Delete expense success', async () => {

    const response = await request.delete(`/expenses/${createdExpenseId}`).send();
    expect(response.status).toBe(200);

  }, 30000);

});

