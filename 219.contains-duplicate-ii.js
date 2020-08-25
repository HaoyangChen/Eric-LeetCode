/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// Method 1 Hashmap
// Time Complexity: O(n)
// Space Complexity:
// var containsNearbyDuplicate = function (nums, k) {
//   let hashmap = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (!hashmap.has(nums[i])) {
//       hashmap.set(nums[i], i);
//     } else {
//       let prevIndex = hashmap.get(nums[i]);
//       if (i - prevIndex <= k) {
//         return true;
//       } else {
//         hashmap.set(nums[i], i);
//       }
//     }
//   }
//   return false;
// };

// Method 2: Hash Set
// Time Complexity: O(n) - We need to do n operations of searching, deleting, and inserting. Each operation costs constant time
// Space Complexity: O(min(n, k)) - The space depends on the number of elements stored in the hash set.
var containsNearbyDuplicate = function (nums, k) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }
  return false;
};

// @lc code=end
