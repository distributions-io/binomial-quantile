'use strict';

// MODULES //

var isObject = require( 'validate.io-object' ),
	isNonNegativeInteger = require( 'validate.io-nonnegative-integer' ),
	isNumber = require( 'validate.io-number-primitive' ),
	isBoolean = require( 'validate.io-boolean-primitive' ),
	isFunction = require( 'validate.io-function' ),
	isString = require( 'validate.io-string-primitive' );


// VALIDATE //

/**
* FUNCTION: validate( opts, options )
*	Validates function options.
*
* @param {Object} opts - destination for validated options
* @param {Object} options - function options
* @param {Number} [options.n] - number of trials
* @param {Number} [options.p] - success probability
* @param {Boolean} [options.copy] - boolean indicating if the function should return a new data structure
* @param {Function} [options.accessor] - accessor function for accessing array values
* @param {String} [options.sep] - deep get/set key path separator
* @param {String} [options.path] - deep get/set key path
* @param {String} [options.dtype] - output data type
* @returns {Null|Error} null or an error
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'quantile()::invalid input argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( options.hasOwnProperty( 'n' ) ) {
		opts.n = options.n;
		if ( !isNonNegativeInteger( opts.n ) ) {
			return new TypeError( 'quantile()::invalid option. `n` parameter must be a non-negative integer. Option: `' + opts.n + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'p' ) ) {
			opts.p = options.p;
			if ( !isNumber( opts.p ) || ( opts.p < 0 || opts.p > 1 ) ) {
				return new TypeError( 'quantile()::invalid option. `p` parameter must be a number primitive between 0 and 1. Option: `' + opts.p + '`.' );
			}
		}
	if ( options.hasOwnProperty( 'copy' ) ) {
		opts.copy = options.copy;
		if ( !isBoolean( opts.copy ) ) {
			return new TypeError( 'quantile()::invalid option. Copy option must be a boolean primitive. Option: `' + opts.copy + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'accessor' ) ) {
		opts.accessor = options.accessor;
		if ( !isFunction( opts.accessor ) ) {
			return new TypeError( 'quantile()::invalid option. Accessor must be a function. Option: `' + opts.accessor + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'path' ) ) {
		opts.path = options.path;
		if ( !isString( opts.path ) ) {
			return new TypeError( 'quantile()::invalid option. Key path option must be a string primitive. Option: `' + opts.path + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'sep' ) ) {
		opts.sep = options.sep;
		if ( !isString( opts.sep ) ) {
			return new TypeError( 'quantile()::invalid option. Separator option must be a string primitive. Option: `' + opts.sep + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'dtype' ) ) {
		opts.dtype = options.dtype;
		if ( !isString( opts.dtype ) ) {
			return new TypeError( 'quantile()::invalid option. Data type option must be a string primitive. Option: `' + opts.dtype + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
