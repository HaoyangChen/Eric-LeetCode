/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Method: Two Pointers
// Time Complexity: O(n) - However, the total number of operations are still sub-optimal. The total operations (array writes) that code does is n (Total number of elements)
// Space Complexity: O(1) - only constant space is used
var moveZeroes = function (nums) {
  let lastNoneZeroFoundAt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNoneZeroFoundAt++] = nums[i];
    }
  }
  for (let i = lastNoneZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }
};
// @lc code=end
