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

// A brute force method for solving this problem would be to simply check for the presence of each number that we expect to be present. The naive implementation might use a linear scan of the array to check for containment, but we can use a HashSet to get constant time containment queries and overall linear runtime.
// Time Complexity: O(n) - because the set allows for O(1) containmnent queries, the main loop runs in O(n) time, creating numSet costs O(n) time, as each set insertion runs in amortized O(1) time, so the overall runtime is O(n + n) = O(n)
// Space Complexity: O(n) - nums contains n - 1 distinct elements, so it costs O(n) space to store a set containing all of them.
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
