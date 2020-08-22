/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Binary Search
// Time Complexity: O(logn), where n is the length of nums. The time complexity is equivalent to the time complexity of binary search.
// Space Complexity: O(1) - only needs constant space to store variable
var search = function (nums, target) {
  let n = nums.length;
  if (!n) return -1;
  if (n === 1) return nums[0] === target ? 0 : -1;
  let l = 0,
    r = n - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return mid;
    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[n - 1]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
};
// @lc code=end
