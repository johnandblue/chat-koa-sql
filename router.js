
const router = require('koa-router')();

const messages = require('./controllers/messages.js');

router.get('/messages', messages.getAll);
router.post('/messages', messages.post);
router.post('/deleteMsgs', messages.deleteAll);

module.exports = router;
