/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // Method: Binary Search
 // Time Complexity: O(log10(n)) Because binary search cuts the search space roughly in half on each iteration, there can be at most [log10(n)] iterations. Binary search is invoked twice, so the overall complexity is logarithmic.
 // Space Complexity: O(1) - All work is done in place, so the overall memory usage is constant
var searchRange = function(nums, target) {
    let targetRange = [-1, -1];
    let leftIndex = extremeInsertionIndex(nums, target, true);
    if (leftIndex === nums.length || nums[leftIndex] !== target) return targetRange;
    targetRange[0] = leftIndex;
    targetRange[1] = extremeInsertionIndex(nums, target, false) - 1;
    return targetRange;
};

var extremeInsertionIndex = function(nums, target, left) {
    let lo = 0;
    let hi = nums.length;
    while (lo < hi) {
        let mid = Math.floor((lo + hi)/2);
        if (nums[mid] > target || (left && target === nums[mid])) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return lo;
}
// @lc code=end

