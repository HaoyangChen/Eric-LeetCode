/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// Method 1: Sort by row
// Time Complexity: O(n) - where n == len(s)
// Space Complexity: O(n)
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const len = Math.min(numRows, s.length);
  const rows = [];
  for (let i = 0; i < len; i++) {
    rows[i] = "";
  }
  let down = false;
  let loc = 0;
  for (const c of s) {
    rows[loc] += c;
    if (loc === 0 || loc === numRows - 1) down = !down;
    loc += down ? 1 : -1;
  }
  let ans = "";
  for (const row of rows) {
    ans += row;
  }
  return ans;
};
// @lc code=end
