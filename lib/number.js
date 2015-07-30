'use strict';

// MODULES //

var cdf = require( 'distributions-binomial-cdf/lib/number.js' ),
	erfcinv = require( 'compute-erfcinv/lib/number.js' ),
	search = require( './search.js' );


// FUNCTIONS //

var round = Math.round,
	sqrt = Math.sqrt;


// CONSTANTS //

var ROOT_TWO = sqrt( 2 );


// QUANTILE //

/**
* FUNCTION: quantile( p, n, prob )
*	Evaluates the quantile function for a Binomial distribution with number of trials `n` and success probability `prob` at a probability `p`.
*
* @param {Number} p - input value
* @param {Number} n - number of trials
* @param {Number} prob  - success probability
* @returns {Number} evaluated quantile function
*/
function quantile( p, n, prob  ) {
	var mu,
		sigma, sigma_inv,
		x, x2,
		corr,
		guess;

	if ( p !== p || p < 0 || p > 1 ) {
		return NaN;
	}
	if ( p === 0 ) {
		return 0;
	}
	if ( p === 1 ) {
		return n;
	}
	// Cornish-Fisher expansion
	mu = n * prob;
	sigma = sqrt( n * prob * ( 1 - prob ) );
 	sigma_inv = 1 / sigma;
	if ( p < 0.5 ) {
		x = -erfcinv( 2 * p ) * ROOT_TWO;
	} else {
		x = erfcinv( 2 * ( 1 - p ) ) * ROOT_TWO;
	}
	x2 = x * x;
	// Skewness correction:
	corr = x + sigma_inv * ( x2 - 1 ) / 6;
	guess = round( mu + sigma * corr );
	return ( cdf( guess, n, prob ) >= p ) ? search.left( guess, p, n, prob ) : search.right( guess, p, n, prob );
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
