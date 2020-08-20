/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

 // Method 1: Hashmap
 // Time Complexity: O(n) - We iterate over nums once and make a constant time HashMap insertion on each iteration. Therefore, the algorithm runs in O(n) time.
 // Space Complexity: O(n) - At most, the HashMap can contain n - n/2 associations, so it occupies O(n) space
// var majorityElement = function(nums) {
//     let map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(nums[i])) {
//             map.set(nums[i], map.get(nums[i]) + 1);
//         } else {
//             map.set(nums[i], 1)
//         }
//     }
//     for (let item of map.entries()) {
//         if (item[1] > nums.length / 2) {
//             return item[0];
//         }
//     }
// };

// Method 2: Sorting
// No matter what value the majority element has in relation to the rest of the array, returning the value at n/2 will never be wrong
// Time Complexity: O(nlog) - sorting the array costs O(nlogn) time, so it dominates the overall runtime.
// Space Complexity: O(1) - We sort the array in place here - if that is not allowed, then we must spend linear additional space on a copy of nums and sort the copy instead.
// var majorityElement = function(nums) {
//     nums.sort((a, b) => {
//         return a - b;
//     });
//     return nums[Math.floor(nums.length / 2)];
// }

// Method 3: Boyer-Moore Voting Algorithm
// Time Complexity: O(n) - Boyer-Moore performs constant work exactly n times, so the algorithm runs in linear time.
// Space Complexity: O(1) - Boyer-Moore allocates only constant additional memory.
var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    return candidate;
}
// @lc code=end

