/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let minprice = prices[0];
    let maxProfit = 0 ;

    for(let i= 1 ; i < prices.length;i++){

        minprice = Math.min(minprice,prices[i]);

        maxProfit = Math.max(maxProfit, prices[i]- minprice);

    }

    return maxProfit;

};