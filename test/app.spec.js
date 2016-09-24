'use strict';

const app = require('../src/app');
const request = require('supertest').agent(app.listen());

describe('index', () => {
  it('should return 200', (done) => {
    request
      .get('')
      .expect(200, 'Hello World', done);
  })
});