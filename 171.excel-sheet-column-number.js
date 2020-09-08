/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let arr = s.split("");
  let n = arr.length;
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i].charCodeAt() - 65 + 1;
    res = res * 26 + num;
    // or just use
    // res += (arr[i].charCodeAt() - 65 + 1) * Math.pow(26, n - i - 1);
  }
  return res;
};
// @lc code=end
