/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

// Method: Two Pointer Approach
// Time Complexity: O(n) - single pass
// Space Complexity: O(1) - constant space
var maxArea = function (height) {
  let maxarea = 0,
    l = 0;
  r = height.length - 1;
  while (l < r) {
    maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l));
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return maxarea;
};
// @lc code=end
