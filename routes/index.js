var express = require('express'),
	router = express.Router(),
	passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('pages/index', { title: 'Authverse' });
});

/* GET login page. */
router.get('/login', function(req, res) {
	res.render('pages/login', { title: 'Authverse' });
});

/* Submit login page. */
router.post('/login', function(req, res) {
	console.log('inside Login POST');
	console.log(req.body);
	basic.userLogin(req.body, function(sucObj, sucData, sucKey) {
		helper.response(sucObj, sucData, sucKey, res);
	}, function(errObj){
		helper.errReponse(errObj, res);
	});
});

module.exports = router;
