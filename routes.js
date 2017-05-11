const router = require('koa-router')();
const controller = require('./controllers/messagesCtrl.js');

router.get('/messages', controller.getMessages);
router.post('/messages', controller.postMessage);
router.post('/deleteMsgs', controller.deleteMsgs);

module.exports = router;
