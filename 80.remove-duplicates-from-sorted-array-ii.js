/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// Method 1
// Time Complexity: O(N^2) - We need to traverse the entire N elements in the array, which takes O(N) runtime
//                         - To remove duplicates, the deletion costs O(N) as well
//                         - In the worst case, if all elements in the array are the same, we need to perform N - 1 deletions, which would cost O(N^2) runtime
//                         - So the overall time complexity is O(N) + O(N^2) = O(N^2)
// Space Complexity: O(1) - We modify the array in place.
var removeDuplicates = function (nums) {
  let i = 1,
    count = 1,
    length = nums.length;
  while (i < length) {
    if (nums[i] === nums[i - 1]) {
      count++;
      if (count > 2) {
        removeElement(nums, i);
        i--;
        length--;
      }
    } else {
      count = 1;
    }
    i++;
  }
  return length;
};

const removeElement = (arr, index) => {
  for (let i = index + 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  return arr;
};
// @lc code=end
