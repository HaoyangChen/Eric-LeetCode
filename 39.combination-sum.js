/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// Time Complexity: O(S) - S is the The sum of the lengths of all the possible solutions
// Space Complexity: O(target) - the space complexity depends on the recursion stack. In the worst case, we need to cover O(target) levels of recursion
var combinationSum = function (candidates, target) {
  const ans = [];
  const dfs = (target, combine, idx) => {
    if (idx === candidates.length) {
      return;
    }
    if (target === 0) {
      ans.push(combine);
      return;
    }
    // skip
    dfs(target, combine, idx + 1);
    // select the current number
    if (target - candidates[idx] >= 0) {
      dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
    }
  };
  dfs(target, [], 0);
  return ans;
};
// @lc code=end
