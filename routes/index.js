var express = require('express');
var router = express.Router();
var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

var cb2 = function (req, res) {
  res.send('Hello from C!')
}

router.get('/', [cb0, cb1, cb2]);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HANA APP' });
});
router.get('/users', function(req, res, next) {
  res.render('index', { title: 'USER APP' });
    
});

module.exports = router;
