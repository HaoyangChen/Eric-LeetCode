/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Method 1: Two Sets
// The idea is to convert both arrays into sets, and then iterate over the smallest set checking the presence of each element in the larger set. Time complexity of this approach is O(n + m) in the average case
// Time Complexity: O(m + n), where m and n are array's length. O(n) time is used to convert nums1 into set, O(m) time is used to convert nums2 into set, and contains/has operations are O(1) in the average case
// Space Complexity: O(m + n) in the worst case when all elements are different
var intersection = function (nums1, nums2) {
  const set1 = new Set();
  for (const n of nums1) {
    set1.add(n);
  }
  const set2 = new Set();
  for (const n of nums2) {
    set2.add(n);
  }
  if (set1.size < set2.size) {
    return setIntersection(set1, set2);
  } else {
    return setIntersection(set2, set1);
  }
};

const setIntersection = (set1, set2) => {
  const output = [];
  let index = 0;
  for (const s of set1) {
    if (set2.has(s)) {
      output[index++] = s;
    }
  }
  return output;
};

// @lc code=end
