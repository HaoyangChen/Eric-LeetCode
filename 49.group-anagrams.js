/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Method 1: Categorize by Sorted String
// Time Complexity: O(NKlogK) where N is the length of strs, and k is the maximum length of a string in strs. The outer loop has complexity O(N) as we iterate through each string. Then we sort each string in O(klogn) time.
// Space Complexity: O(NK), the total information content stored in O(klogk) time
var groupAnagrams = function (strs) {
  let hash = new Map();
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i].split("").sort().join();
    if (hash.has(str)) {
      let temp = hash.get(str);
      temp.push(strs[i]);
      hash.set(str, temp);
    } else {
      hash.set(str, [strs[i]]);
    }
  }
  return [...hash.values()];
};
// @lc code=end
