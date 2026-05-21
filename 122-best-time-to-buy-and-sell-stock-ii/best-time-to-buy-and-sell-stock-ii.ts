function maxProfit(prices: number[]): number {
    
    let profit: number = 0;


for (let prv = 0, crnt = 1; crnt < prices.length; prv++, crnt++) {
    if (prices[prv] <= prices[crnt]) {
        profit += prices[crnt] - prices[prv];
    }
}

    return profit;
};
