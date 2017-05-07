
const app = require('koa')();
const fs = require('fs');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const db = require('./config/db.js');
const router = require('./router.js');
const notFound = fs.readFileSync('./public/404-barbie.html', 'utf8');

app.use(bodyParser());
app.use(router.routes());
app.use(serve('./public'));
app.use(function* (next) {
  if (this.status === 404) this.body = notFound;
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  app.listen(3000);
  console.log('Barbie Mongoose connection working...');
});
