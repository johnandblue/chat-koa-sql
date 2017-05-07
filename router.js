const router = require('koa-router')();
const messages = require('./controllers/messages.js');
const users = require('./controllers/users.js');
const login = require('./controllers/login.js');



router.get('/messages', messages.getAll);
router.post('/messages', messages.post);
router.post('/deleteMsgs', messages.deleteAll);
router.post('/users', users.post);
router.post('/login', login.post);

module.exports = router;
