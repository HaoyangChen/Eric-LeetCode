/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let numSet = new Set();
  for (let num of nums) {
    numSet.add(num);
  }
  const expectedNumCount = nums.length + 1;
  for (let number = 0; number < expectedNumCount; number++) {
    if (!numSet.has(number)) {
      return number;
    }
  }
  return -1;
};
// @lc code=end
