'use strict';

const chai = require('chai');
const app = require('../src/app');
const request = require('supertest').agent(app.listen());

chai.should();
describe('index', () => {
  it('should return 200', (done) => {
    request
      .get('')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        res.body.should.have.property('database');
        done();
      });
  })
});