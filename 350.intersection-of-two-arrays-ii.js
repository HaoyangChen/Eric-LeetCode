/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Method 1: Hashmap
// Time Complexity: O(m + n) - where m and n are the length of the given two arrays. We need to traverse both arrays and manipulate the hashmap. The time complexity of manipulating hashmap is O(1), so the overall time complexity is related to the length of the two given arrays.
// Space Complexity: O(min(m, n)) - The size of the hashmap is at most the length of the given array with smaller size.

// var intersect = function (nums1, nums2) {
//   let hashmap = new Map();
//   if (nums1.length > nums2.length) {
//     intersect(nums2, nums1);
//   }

//   for (let i = 0; i < nums1.length; i++) {
//     let value = nums1[i];
//     let count = hashmap.has(value) ? hashmap.get(value) + 1 : 1;
//     hashmap.set(value, count);
//   }

//   let intersection = [];
//   let index = 0;
//   for (let i = 0; i < nums2.length; i++) {
//     let num = nums2[i];
//     let count = hashmap.has(num) ? hashmap.get(num) : 0;
//     if (count > 0) {
//       intersection[index++] = num;
//       count--;
//       if (count > 0) {
//         hashmap.set(num, count);
//       } else {
//         hashmap.delete(num);
//       }
//     }
//   }
//   return intersection;
// };

var intersect = function (nums1, nums2) {
  const map = new Map();
  for (const n of nums1) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }
  const result = [];
  for (const n of nums2) {
    if (map.has(n) && map.get(n) > 0) {
      result.push(n);
      map.set(n, map.get(n) - 1);
    }
  }
  return result;
};
// @lc code=end
