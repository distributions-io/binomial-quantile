'use strict';

// MODULES //

var cdf = require( 'distributions-binomial-cdf/lib/number.js' );


// SEARCH LEFT //

/**
* FUNCTION search_left( x, p, n, prob )
*	Performs a search to the right.
*
* @param {Number} x - starting guess
* @param {Number} p - probability
* @param {Number} n - number of trials
* @param {Number} prob - success probability
* @returns {Number} `p` quantile of the specified distribution
*/
function search_left( x, p, n, prob ) {
	while( true ) {
		if ( x === 0 || cdf( x - 1, n, prob ) < p ) {
			return x;
		}
		x--;
	}
} // end FUNCTION search_left()


// SEARCH RIGHT //

/**
* FUNCTION search_right( x, p, n, prob )
*	Performs a search to the right.
*
* @param {Number} x - starting guess
* @param {Number} p - probability
* @param {Number} n - number of trials
* @param {Number} prob - success probability
* @returns {Number} `p` quantile of the specified distribution
*/
function search_right( x, p, n, prob ) {
	while( true ) {
		x++;
		if ( cdf( x, n, prob ) >= p ) {
			return x;
		}
	}
} // end FUNCTION search_right()


// EXPORTS //

module.exports = {
	'left': search_left,
	'right': search_right
};
