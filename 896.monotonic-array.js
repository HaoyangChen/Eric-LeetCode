/*
 * @lc app=leetcode id=896 lang=javascript
 *
 * [896] Monotonic Array
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */

// Algorithm
// To perform this check in one pass, we want to remember if it is monotone increasing or monotone decreasing.
// It's monotone increasing if there aren't some adjacent values A[i], A[i+1] with A[i] > A[i+1], and similarly for monotone decreasing.
// If it is either monotone increasing or monotone decreasing, then A is monotonic.

// Time Complexity: O(N) - where N is the length of the given array A
// Space Complexity: O(1)
var isMonotonic = function (A) {
  let increasing = true;
  let decreasing = true;

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] > A[i + 1]) {
      increasing = false;
    }
    if (A[i] < A[i + 1]) {
      decreasing = false;
    }
  }
  return increasing || decreasing;
};
// @lc code=end
