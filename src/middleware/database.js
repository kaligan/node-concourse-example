'use strict';

const knex = require('../services/knex');

module.exports = function* (next) {
  this.knex = knex;
  yield next;
};
