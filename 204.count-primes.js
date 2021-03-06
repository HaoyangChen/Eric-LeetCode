/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// Use Sieve of Eratosthenes Algorithm
// The total Iteration run time can reduce to sqrt(n)
// Time Complexity: O(nloglog(n))
// Space Complexity: O(n)
var countPrimes = function (n) {
  let count = 0;
  let signs = new Uint8Array(n);

  for (let i = 2; i < n; i++) {
    if (!signs[i - 1]) {
      count++;
      for (let j = i * i; j <= n; j += i) {
        signs[j - 1] = true;
      }
    }
  }
  return count;
};
// @lc code=end
