const router = require('koa-router')();
const messages = require('./controllers/messages.js');
const registers = require('./controllers/registers.js');
const login = require('./controllers/login.js');



router.get('/messages', messages.getAll);
router.post('/messages', messages.post);
router.post('/deleteMsgs', messages.deleteAll);
router.post('/register', registers.post);
router.post('/login', login.post);

module.exports = router;
