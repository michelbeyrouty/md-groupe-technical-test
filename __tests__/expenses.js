'use strict';
const expenseControllers = require('../api/controllers');

describe('Test expenses', () => {

  test('Post expense', async () => {

    const postPayload = {
      'description': 'd',
      'type': 'Entertainment',
      'value': 1,
    };

    const x = expenseControllers.post(postPayload);

    expect(generatedHtml).toEqual(expectedHtml);
  });

});

