/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Hash Table
// Time Complexity: O(n) - We do search and insert for n times and each operation takes constant time
// Space Complexity: O(n) - The space used by a hash table is linear with the number of elements in it
var containsDuplicate = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }
  return false;
};
// @lc code=end
