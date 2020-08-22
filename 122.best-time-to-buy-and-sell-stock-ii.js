/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

// Method 1: Peak Value Approach
// Time Complexity: O(n) - single pass
// Space Complexity: O(1) - constant space needed
// var maxProfit = function (prices) {
//   let i = 0;
//   let profit = 0;
//   let valley = prices[0];
//   let peak = prices[0];
//   while (i < prices.length - 1) {
//     while (i < prices.length - 1 && prices[i] >= prices[i + 1]) {
//       i++;
//     }
//     valley = prices[i];
//     while (i < prices.length - 1 && prices[i] <= prices[i + 1]) {
//       i++;
//     }
//     peak = prices[i];
//     profit += peak - valley;
//   }
//   return profit;
// };

// Method: One Pass
// Time Complexity: O(n) - single pass
// Space Complexity: O(1) - constant space needed
var maxProfit = function (prices) {
  let maxprofit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxprofit += prices[i] - prices[i - 1];
    }
  }
  return maxprofit;
};
// @lc code=end
