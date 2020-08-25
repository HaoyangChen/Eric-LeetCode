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

// Method 1: Sorting
// Time Complexity: O(nlogn) - Sorting is O(nlogn) and the sweeping is O(n). The entire algorithm is dominated by the sorting step, which is O(nlogn)
// Space Complexity: O(1) - Space depends on the sorting implementation which, usually, costs O(1) auxiliary space if heapsort is used.
// var containsDuplicate = function (nums) {
//   nums.sort((a, b) => {
//     return a - b;
//   });
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] === nums[i + 1]) return true;
//   }
//   return false;
// };

// Method 2: Hash Table
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
