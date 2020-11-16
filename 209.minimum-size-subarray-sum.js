/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

// Method: 2 pointers approach
// Algorithm:
// 1: Initialize left pointer to 0 and sum to 0
// 2: Iterate over the nums: add nums[i] to sum
// 3: While sum is greater than or equal to s: update ans = Math.min(ans, i + 1 - left), where i + 1- left is the size of the current subarray
//    Subtract nums[left] from sum and increment left

// Time Complexity: O(n) - single iteration of O(n) --> Each letter can be visited at most twice, once by the right pointer and at most once by the left pointer.
// Space Complexity: O(1) extra space. Only constant space required for left, sum, ans, and i
var minSubArrayLen = function (s, nums) {
  let n = nums.length;
  let ans = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    while (sum >= s) {
      ans = Math.min(ans, i + 1 - left);
      sum -= nums[left++];
    }
  }
  return ans !== Number.MAX_SAFE_INTEGER ? ans : 0;
};
// @lc code=end
