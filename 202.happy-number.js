/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */

// Method 1: Hashset
// Time Complexity: O(logn)
// Space Complexity: O(logn)

// var isHappy = function (n) {
//   let seen = new Set();
//   while (n !== 1 && !seen.has(n)) {
//     seen.add(n);
//     n = getNext(n);
//   }
//   return n === 1;
// };

// const getNext = (n) => {
//   let totalSum = 0;
//   while (n > 0) {
//     let d = n % 10;
//     n = parseInt(n / 10);
//     totalSum += d * d;
//   }
//   return totalSum;
// };

// Method 2: Fast and slow pointers
// Time Complexity: O(logn)
// Space Complexity: O(1) - no additional space is required
var isHappy = function (n) {
  let slowRunner = n;
  let fastRunner = getNext(n);
  while (fastRunner !== 1 && slowRunner !== fastRunner) {
    slowRunner = getNext(slowRunner);
    fastRunner = getNext(getNext(fastRunner));
  }
  return fastRunner === 1;
};

const getNext = (n) => {
  let totalSum = 0;
  while (n > 0) {
    let d = n % 10;
    n = parseInt(n / 10);
    totalSum += d * d;
  }
  return totalSum;
};

// @lc code=end
