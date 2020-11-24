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
// Method 1:
// var findMaxConsecutiveOnes = function (nums) {
//   return Math.max(
//     ...nums
//       .join("")
//       .split("0")
//       .map((ones) => ones.length)
//   );
// };

// Method 2:
// var findMaxConsecutiveOnes = function (nums) {
//   let max = 0,
//     curr = 0;
//   for (let k of nums) {
//     max = Math.max(max, (curr += k));
//     if (!k) curr = 0;
//   }
//   return max;
// };

// Method 3:
var findMaxConsecutiveOnes = function (nums) {
  return nums
    .join("")
    .split("0")
    .reduce((max, ones) => Math.max(max, ones.length), 0);
};

// @lc code=end
