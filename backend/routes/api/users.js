const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: true });

// user functions
const user = require('../../user');

router.post('/signin', urlencodedParser, (req, res) => {
  console.log('body: ');
  console.log(req.body);
  user.signin(req.body.username, req.body.password).then( data => {
    console.log('User: ' + data.username + ' Signed in successfully.');
    res.json({data, success: true});
  }).catch(err => {
    res.status(400).json({err, success: false});
  });
});

router.post('/signup', urlencodedParser, (req, res) => {
  user.signup(req.body.username, req.body.password)
    .then(data => res.json(data))
    .catch(err => res.status(400).json({err, success: false}));
});


module.exports = router;
