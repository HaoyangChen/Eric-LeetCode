/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

 // Method 1: Two pointers
 // Space Complexity: O(n) - where n is the length of the given array. Two total number of steps moving of two pointers is at most n times.
 // Time Complexity: O(1)
// var twoSum = function(numbers, target) {
//     let low = 0;
//     let high = numbers.length - 1;
//     while (low < high) {
//         let sum = numbers[low] + numbers[high];
//         if (sum === target) {
//             return [low + 1, high + 1];
//         } else if (sum < target) {
//             low++;
//         } else {
//             high--;
//         }
//     }
//     return [-1, -1]
// };


// Method 2: Binary Search
// Time Complexity: O(nlog(n)) - where n is the length of the given array. Finding the value of first index in the array requires O(n) runtime, and finding the value of the second index in the array requires O(log(n)) due to binary search. So the overall time complexity is O(nlog(n))
// Space Complexity: O(1)
var twoSum = function(numbers, target) {
    for (let i = 0; i < numbers.length; ++i) {
        let low = i + 1;
        let high = numbers.length - 1;
        while (low <= high) {
            let mid = parseInt((high - low) / 2) + low;
            if (numbers[mid] === (target - numbers[i])) {
                return [i + 1, mid + 1];
            } else if (numbers[mid] > target - numbers[i]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
    }
    return [-1, -1];
}
// @lc code=end

