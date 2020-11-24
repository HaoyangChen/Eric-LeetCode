/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  return Math.max(
    ...nums
      .join("")
      .split("0")
      .map((ones) => ones.length)
  );
};
// @lc code=end
