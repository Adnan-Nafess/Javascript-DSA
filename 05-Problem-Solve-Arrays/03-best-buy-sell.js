var maxProfit = function(prices) {
    // Step 1: Start by assuming you buy on Day 0
    let currMin = prices[0];

    // Step 2: Track the max profit
    let profit = 0;

    // Step 3: Loop through the array starting from Day 1
    for (let i = 1; i < prices.length; i++) {

        // If current price is greater than previous min, you can sell
        if (prices[i] > currMin) {
            // Calculate profit if sold today
            profit = Math.max(profit, prices[i] - currMin);
        }

        // Update currMin if today's price is lower than previous min
        if (prices[i] < currMin) {
            currMin = prices[i];
        }
    }

    // Step 4: Return the max profit at the end
    return profit;
};

// ✅ Test Example
const prices = [7, 1, 5, 3, 6, 4];
console.log("Maximum Profit:", maxProfit(prices)); // Output: 5