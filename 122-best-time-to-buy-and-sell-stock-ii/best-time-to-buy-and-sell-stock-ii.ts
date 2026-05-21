function maxProfit(prices: number[]): number {
    
    let profit: number = 0;


for (let prv = 0; prv < prices.length - 1; prv++) {
    if (prices[prv] <= prices[prv + 1]) {
        profit += prices[prv + 1] - prices[prv];
    }
}

    return profit;
};
