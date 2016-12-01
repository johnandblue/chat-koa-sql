
const app = require('koa')();
const fs = require('fs');
const serve = require('koa-static');
var mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser')();
// const db = require('./config/db.js');
const db = mongoose.connection;

const routes = require('./routes.js');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
mongoose.connect('mongodb://localhost/test');
// const url = 'mongodb://localhost:27017/barbie_mongo_db';

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Barbie Mongoose connection working...');
  // we're connected!
});


const notFound = fs.readFileSync('./public/404-barbie.html', 'utf8');

app.use(serve('./public'));
app.use(bodyParser);
app.use(routes.routes());


app.use(function* (next) {
  if (this.status === 404) this.body = notFound;
});

// db.connect(function (err) {
//   if (err) console.error('error connecting: ' + err.stack);
// });


// MONGO DB CONNECTION -->

// MongoClient.connect(url, function (err, db) {
//   if (err) {
//     console.log('Unable to connect to the mongoDB server. Error:', err);
//   } else {
//     //HURRAY!! We are connected. :)
//     console.log('Connection established to', url);
//
//     // Get the documents collection
//     var collection = db.collection('users');
//
//     //Create some users
//     var user1 = {name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']};
//     var user2 = {name: 'modulus user', age: 22, roles: ['user']};
//     var user3 = {name: 'modulus super admin', age: 92, roles: ['super-admin', 'admin', 'moderator', 'user']};
//
//     // Insert some users
//     collection.insert([user1, user2, user3], function (err, result) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result.ops.length);
//       }
//       //Close connection
//       // db.close();
//     });
//   }
// });

  app.listen(3000);
