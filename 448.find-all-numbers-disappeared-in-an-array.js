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

// Method 1: Hash table
// Time Complexity: O(N)
// Space Complexity: O(N)

// var findDisappearedNumbers = function (nums) {
//   // Hash table for keeping track of the numbers in the array
//   let hashtable = new Map();

//   // Add each of the numbers to the hash table
//   for (let i = 0; i < nums.length; i++) {
//     hashtable.set(nums[i], true);
//   }

//   // Response array that would contain the missing number
//   let result = [];

//   // Iterate over the numbers from 1 to N and add all those that don't appear in the hash table
//   for (let i = 1; i <= nums.length; i++) {
//     if (!hashtable.has(i)) {
//       result.push(i);
//     }
//   }
//   return result;
// };

// Method 2: Modify In-place
// Algorithm:
// - We iterate all elements in the given array once
// - Then we mark element at index |nums[i]| - 1 as negative, which means nums[|nums[i]| - 1] * -1
// - We then iterate through the array. If the element nums[i] is negative, that means we have number i + 1 in the array
// - If the element at nums[i  - 1] is positive, we push i to the result array

// Time Complexity: O(N)
// Space Complexity: O(1) - Because we modify the array in place without using extra space
var findDisappearedNumbers = function (nums) {
  // Iterate over each of the elements in the original array
  for (let i = 0; i < nums.length; i++) {
    // Treat the value as the new index
    let newIndex = Math.abs(nums[i]) - 1;

    // Check the magnitude of value at this new index
    // If the magnitude is positive, make it negative
    // thus indicating that the number nums[i] has
    // appeared or has been visited.
    if (nums[newIndex] > 0) {
      nums[newIndex] *= -1;
    }
  }

  // Response array that would contain the missing numbers
  let result = [];

  // Iterate over the numbers from 1 to N and add all those that have positive magnitude in the array
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] > 0) {
      result.push(i);
    }
  }
  return result;
};
// @lc code=end
