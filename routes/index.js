var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages: messages });
});

router.post('/new', function(req, res, next) {
    const user = req.body.name
    const text = req.body.messageText
    messages.push({text: text, user: user, added: new Date()});
    res.redirect('/')
})

router.post('/message', function(req, res, next) {
  res.redirect('/new')
})

module.exports = router;
