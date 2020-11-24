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
// var findMaxConsecutiveOnes = function (nums) {
//   return Math.max(
//     ...nums
//       .join("")
//       .split("0")
//       .map((ones) => ones.length)
//   );
// };

var findMaxConsecutiveOnes = function (nums) {
  let max = 0,
    curr = 0;
  for (let k of nums) {
    max = Math.max(max, (curr += k));
    if (!k) curr = 0;
  }
  return max;
};

// @lc code=end
