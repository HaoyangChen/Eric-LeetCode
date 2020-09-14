/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Method 1: Cascading
// Start from empty subset in output list. At each step one takes new integer into consideration and generates new subsets from the existing ones.
// Time Complexity: O(N * 2^N) to generate all subsets and then copy them into output list
// Space Complexity: O(N * 2^N) - This is exactly the number of solutions for subsets multiplied by the number N of elements to keep for each subset
//                                 For a given number, it could be present or absent (i.e. binary choice) in a subset solution. As a result, for N numbers, we would have in total 2^N choices.
// var subsets = function (nums) {
//   const res = [[]];
//   for (let i = 0; i < nums.length; i++) {
//     let len = res.length;
//     for (let j = 0; j < len; j++) {
//       let sub = res[j].slice();
//       sub.push(nums[i]);
//       res.push(sub);
//     }
//   }
//   return res;
// };

// Method 2: Recursive Backtracking
// Time Complexity: O(N * 2^N) to generate all subsets and then copy them into output list
// Space Complexity: O(N * 2^N) to keep all the subsets of length N, since each of N elements could be present or absent
var subsets = function (nums) {
  let n = nums.length;
  let tepPath = [];
  let res = [];
  let backtrack = (tepPath, start) => {
    res.push(tepPath);
    for (let i = start; i < n; i++) {
      tepPath.push(nums[i]);
      backtrack(tepPath.slice(), i + 1);
      tepPath.pop();
    }
  };
  backtrack(tepPath, 0);
  return res;
};

// @lc code=end
