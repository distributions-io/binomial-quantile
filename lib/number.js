'use strict';

// FUNCTIONS //


// QUANTILE //

/**
* FUNCTION: quantile( p, n, p  )
*	Evaluates the quantile function for a Binomial distribution with number of trials `n` and success probability `p ` at a probability `p`.
*
* @param {Number} p - input value
* @param {Number} n - number of trials
* @param {Number} p  - success probability
* @returns {Number} evaluated quantile function
*/
function quantile( p, n, p  ) {
	if ( p !== p || p < 0 || p > 1 ) {
		return NaN;
	}
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
