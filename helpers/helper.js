var constants = require('../routes/constants'),
	crypto = require('crypto'),
    cipher = crypto.createCipher('aes-256-cbc', 'salt'),
	helper = require('../helpers/helper');

// All helper functions and data to be written here

/*

Write 
Here

*/

exports.errCodes = function(errCode) {
	// Define all err codes here.
	switch (errCode)
	{
		case constants.NOT_AUTHORIZED:
			errorResponse = 'You are not authorized to take the ride!';
			break;
		default:
			errorResponse = 'Error';
			break;
	}
	return errorResponse;
}

// Success with data
exports.response = function(success, data, key, res) {
	var responseObj = {
		"success": true
	}
	responseObj[key] = data;
	res.status(200).send(responseObj);
}

module.exports = exports;
