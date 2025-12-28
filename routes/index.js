var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/aaa', function(req, res, next) {
    res.send("<h1>AAA (Тройное А) геймдев</h1>")
});

router.get('/mobile', function(req, res, next) {
    res.send("<h1>Мобильный геймдев</h1>")
});


router.get('/indie', function(req, res, next) {
    res.send("<h1>Инди (Independent) геймдев</h1>")
});

module.exports = router;