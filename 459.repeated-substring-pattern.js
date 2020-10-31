/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let s1 = (s + s).slice(1, -1);
  return s1.indexOf(s) !== -1;
};
// @lc code=end
