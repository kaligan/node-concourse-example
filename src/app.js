'use strict';
require('dotenv').config();
const koa = require('koa');
const knex = require('./middleware/database');

const app = module.exports = new koa();

app.use(knex);
app.use(function* () {
  const dbStatus = {};
  try {
    const rows = yield this.knex.raw('show status');
    for (const v of rows[0]) {
      dbStatus[v.Variable_name] = v.Value
    }
  } catch (e) {
    this.status = 500;
    return this.body = {
      message: e.message,
      error: e
    }
  }

  this.body = {
    database: dbStatus
  };
});

if (!module.parent) {
  app.listen(process.env.PORT || 3000);
}
