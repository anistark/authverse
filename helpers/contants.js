// Constants

function define(name, value) {
	Object.defineProperty(exports, name, {
		value: value,
		enumerable: true
	});
}

// Error Codes

define( 'NOT_FOUND', "204" );

define( 'LOC_NOT_FOUND', "210" );
define( 'INVALID_PROVIDER', "211" );
define( 'UN_FILE_TYPE', "231" );
define( 'NO_RIDE', "241" );
define( 'INVALID_RIDE', "242" );
define( 'NOT_AUTHORIZED', "243" );

define( 'PASSWORD_MISMATCH', "251" );
