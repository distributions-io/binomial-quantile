'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( n, p  )
*	Partially applies number of trials `n` and success probability `p ` and returns a function for evaluating the quantile function for a Binomial distribution.
*
* @param {Number} n - number of trials
* @param {Number} p  - success probability
* @returns {Function} quantile function
*/
function partial( n, p  ) {

	/**
	* FUNCTION: quantile( p )
	*	Evaluates the quantile function for a Binomial distribution.
	*
	* @private
	* @param {Number} p - input value
	* @returns {Number} evaluated quantile function
	*/
	return function quantile( p ) {
		if ( p !== p || p < 0 || p > 1 ) {
			return NaN;
		}
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
