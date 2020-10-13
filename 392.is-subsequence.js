/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Method 1: Two pointers
// Time Complexity: O(n + m) - where n is the length of s, m is the length of t
// Space Complexity: O(1)
var isSubsequence = function (s, t) {
  let n = s.length,
    m = t.length;
  let i = 0,
    j = 0;
  while (i < n && j < m) {
    if (s.charAt(i) === t.charAt(j)) {
      i++;
    }
    j++;
  }
  return i === n;
};
// @lc code=end
