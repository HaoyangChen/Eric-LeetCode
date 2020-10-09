/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  // Hash table for keeping track of the numbers in the array
  let hashtable = new Map();

  // Add each of the numbers to the hash table
  for (let i = 0; i < nums.length; i++) {
    hashtable.set(nums[i], true);
  }

  // Response array that would contain the missing number
  let result = [];

  // Iterate over the numbers from 1 to N and add all those that don't appear in the hash table
  for (let i = 1; i <= nums.length; i++) {
    if (!hashtable.has(i)) {
      result.push(i);
    }
  }
  return result;
};
// @lc code=end
