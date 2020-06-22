// 买股票的最佳时机

var maxProfit = function(prices) {
    var min = prices[0]
    var subMax = 0
    for (var i = 0; i< prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        }
        if (prices[i] > min) {
            if (prices[i] - min > subMax) {
                subMax = prices[i] - min
            }
        }
    }
    return subMax
};