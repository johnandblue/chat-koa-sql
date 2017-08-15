'use strict';

require('./config/db.js');
const app = require('koa')();
const fs = require('fs');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser')();
const routes = require('./routes.js');

const notFound = fs.readFileSync('./public/404-barbie.html', 'utf8');
app.use(serve('./public'));
app.use(bodyParser);
app.use(routes.routes());
app.use(function* (next) {
  if (this.status === 404) this.body = notFound;
});
app.listen(3000);
