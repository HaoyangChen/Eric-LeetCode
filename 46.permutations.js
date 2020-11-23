/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// backtracking
var permute = function (nums) {
  let res = [];
  dfs(nums, [], Array(nums.length).fill(false), res);
  return res;
};

const dfs = (letters, path, used, result) => {
  if (path.length === letters.length) {
    result.push(Array.from(path));
    return;
  }
  for (let i = 0; i < letters.length; i++) {
    if (used[i]) continue;
    path.push(letters[i]);
    used[i] = true;
    dfs(letters, path, used, result);
    path.pop();
    used[i] = false;
  }
};

// @lc code=end
