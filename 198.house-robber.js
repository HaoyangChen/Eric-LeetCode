/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// Method: Dynamic Programming
// Time Complexity: O(n) - where n is the length of the array. We only need to traverse the array once
// Space Complexity: O(n) - extra space with length of the given array is required
// var rob = function (nums) {
//   if (nums === null || nums.length === 0) {
//     return 0;
//   }
//   let length = nums.length;
//   if (length === 1) {
//     return nums[0];
//   }
//   let dp = new Array(length);
//   dp[0] = nums[0];
//   dp[1] = Math.max(nums[0], nums[1]);
//   for (let i = 2; i < length; i++) {
//     dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
//   }
//   return dp[length - 1];
// };

// Method: Dynamic Programming with improvement on space complexity
// Time Complexity: O(n) - where n is the length of the array. We only need to traverse the array once
// Space Complexity: O(1) - With scrolling arrays, it allows to store the maximum amount of money in the previous two hourses, rather than storing the results of the entire array. So the space complexity is O(1).
var rob = function (nums) {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  let length = nums.length;
  if (length === 1) {
    return nums[0];
  }
  let first = nums[0],
    second = Math.max(nums[0], nums[1]);
  for (let i = 2; i < length; i++) {
    let temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }
  return second;
};

// @lc code=end
