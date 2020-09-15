/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Method 1: Brute Force
// Repeat pop and insert at front k times.
// var rotate = function (nums, k) {
//   let len = nums.length;
//   for (let i = 0; i < k; i++) {
//     nums.unshift(nums[len - 1]);
//     nums.length--;
//   }
// };

// Brute Force
// Time complexity: O(NK)
// Space complexity: O(1)

// const rotate = (nums, k) => {
//   while (k--) {
//     nums.unshift(nums.pop());
//   }
// };

// Method 2: Stack
// Add element in front of deque takes constant time.
// Time Complexity: O(N)
// Space Complexity: O(N)
// const rotate = (nums, k) => {
//   const stack = [];
//   k %= nums.length;
//   while (k--) {
//     stack.push(nums.pop());
//   }
//   nums.unshift(...stack.reverse());
// };

// Method 3: Using Cyclic Replacements
// Time Complexity: O(N) - Only one pass is used.
// Space Complexity: O(1) - Constant extra space is used.
// const rotate = (nums, k) => {
//   let [start, count] = [0, 0];
//   while (count < nums.length) {
//     let [current, prev] = [start, nums[start]];
//     do {
//       current = (current + k) % nums.length;
//       [nums[current], prev] = [prev, nums[current]];
//       count++;
//     } while (current !== start);
//     start++;
//   }
// };

// Method 4: Using Reverse
// This approach is based on the fact that when we rotate the array k times, k elements from the back end of the array come to the front and the rest of the elements from the front shift backwards.
// In this approach, we firstly reverse all the elements of the array. Then, reversing the first k elements followed by reversing the rest n-k elements gives us the required result.
// Time Complexity:  O(n) - n elements are reversed in a total of three times
// Space Complexity: O(1) - No extra space is used
const rotate = (nums, k) => {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

const reverse = (nums, start, end) => {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
};

// @lc code=end
