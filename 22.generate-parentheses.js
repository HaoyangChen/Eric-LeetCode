/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */

// Backtracking
// We can do this by keeping track of the number of opening and closing brackets we have placed so far.
//  We can start an opening bracket if we still have one (of n) left to place. And we can start a closing bracket if it would not exceed the number of opening brackets.
// Time Complexity: O(4^n / 根号n) Each valid sequence has at most n steps during the backtracking procedure.
// Space Complexity: O(4^n / 根号n) as described above, and using O(n) space to store the sequence.
var generateParenthesis = function (n) {
  let ans = [];
  backtrack(ans, "", 0, 0, n);
  return ans;
};

let backtrack = (ans, cur, open, close, max) => {
  if (cur.length === max * 2) {
    ans.push(cur);
    return;
  }
  if (open < max) {
    backtrack(ans, cur + "(", open + 1, close, max);
  }
  if (close < open) {
    backtrack(ans, cur + ")", open, close + 1, max);
  }
};
// @lc code=end
