var User = require('../models/users');


exports.userLogin = function (fields, sucCb, errCb) {
	console.log(fields);
	sucCb(1);
}

