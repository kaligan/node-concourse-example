'use strict';
require('dotenv').config();
const koa = require('koa');
const knex = require('./middleware/database');

const app = module.exports = new koa();

app.use(knex);
app.use(function *(){
  const rows = yield this.knex.raw('show status');
  const dbStatus = {};
  for(const v of rows[0]){
    dbStatus[v.Variable_name] = v.Value
  }  

  this.body = {
    database: dbStatus
  }
});

if (!module.parent) {
  app.listen(process.env.PORT || 3000);
}
