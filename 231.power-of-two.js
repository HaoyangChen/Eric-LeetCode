/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */

// Slow Method with O(logn) time Complexity
// var isPowerOfTwo = function (n) {
//   if (n === 0) return false;
//   while (n % 2 === 0) n /= 2;
//   return n === 1;
// };

var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) == 0;
};

// @lc code=end
