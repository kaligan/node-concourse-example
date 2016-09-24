'use strict';
const koa = require('koa');

const app = module.exports = new koa();

app.use(function *(){
  this.body = 'Hello World';
});

if (!module.parent) {
  app.listen(process.env.PORT || 3000);
}
