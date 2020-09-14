/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// Method: Soring
// Time Complexity: O(nlogn) - other than the sort function, we do a simple linear scan of the list, so the runtime is dominated by the O(nlogn) complexity of sorting
// Space Complexity: O(1) - If we can sort intervals in place, we do not need more than constant additional space. Otherwise, we must allocate linear space to store a copy of intervals and sort that.
var merge = function (intervals) {
  if (intervals.length === 0) return [];
  let res = [];
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  res.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > res[res.length - 1][1]) {
      res.push(intervals[i]);
    } else {
      if (intervals[i][1] > res[res.length - 1][1]) {
        res[res.length - 1][1] = intervals[i][1];
      }
    }
  }
  return res;
};
// @lc code=end
