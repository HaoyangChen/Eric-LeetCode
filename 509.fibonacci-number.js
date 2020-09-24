/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */

// Method 1: Recursion
// Time Complexity: O(2^N) - This is the slowest way to solve the Fabonacci Sequence, because it takes exponential time. The amount of operations need, for each level of recursion, grows exponentially as the depth approaches N
// Space Complexity: O(N) - We need space proportionate to N to account for the max size of the stack, in memory. This stack keeps track of the function calls to fib(N). This has the potential to be bad in cases that there isn't enough physical memory to handle the increasingly growing stack, leading to a stackoverflowError.
// var fib = function (N) {
//   if (N <= 1) return N;
//   return fib(N - 1) + fib(N - 2);
// };

// Method 2: Bottom-Up Approach using Memorization
// Algorithm:
// If N is less than or equal to 1, return N
// Otherwise, iterate through N, storing each computed answer in an array along the way.
// Use this array as a reference to the 2 previous numbers to calculate the current Fibonacci number.
// Once we've reached the last number, return it's Fibonacci number.

// Time Complexity: O(N) - Each number, starting at 2 up to and including N, is visited, computed and then stored for O(1) access later on
// Space Complexity: O(N) - The size of the data structure is proportionate to N

// var fib = function (N) {
//   if (N <= 1) return N;
//   return memorize(N);
// };

// const memorize = (N) => {
//   let cache = new Array(N + 1).fill(0);
//   cache[1] = 1;
//   for (let i = 2; i <= N; i++) {
//     cache[i] = cache[i - 1] + cache[i - 2];
//   }
//   return cache[N];
// };

// Method 3: Top-Down Approach using Memorization
// Algorithm:
// Check if N <= 1. If it is, return N.
// Call and return memoize(N)
// If N exists in the map, return the cached value for N
// Otherwise set the value of N, in our mapping, to the value of memoize(N-1) + memoize(N-2)
// Time Complexity: O(N) - Each number, starting at 2 up to and including N, is visited, computed and then stored for O(1) access later on.
// Space Complexity: O(N) - The size of the stack in memory is proportionate to N
// var fib = function (N) {
//   let cache = new Array(31);
//   if (N <= 1) {
//     return N;
//   }
//   cache[0] = 0;
//   cache[1] = 1;

//   const memorize = (N) => {
//     if (cache[N] !== undefined) {
//       return cache[N];
//     }
//     cache[N] = memorize(N - 1) + memorize(N - 2);
//     return memorize(N);
//   };

//   return memorize(N);
// };

// Method 4: Iterative Top-Down Approach
// We can achieve O(1) space complexity by only storing the value of the two previous numbers and updating them as we iterate to N.
// Algorithm:
// Check if N <= 1, if it is then we should return N.
// Check if N == 2, if it is then we should return 1 since N is 2 and fib(2-1) + fib(2-2) equals 1 + 0 = 1.
// To use an iterative approach, we need at least 3 variables to store each state fib(N), fib(N-1) and fib(N-2).
// Preset the initial values:
// Initialize current with 0.
// Initialize prev1 with 1, since this will represent fib(N-1) when computing the current value.
// Initialize prev2 with 1, since this will represent fib(N-2) when computing the current value.
// Iterate, incrementally by 1, all the way up to and including N. Starting at 3, since 0, 1 and 2 are pre-computed.
// Set the current value to fib(N-1) + fib(N-2) because that is the value we are currently computing.
// Set the prev2 value to fib(N-1).
// Set the prev1 value to current_value.
// When we reach N+1, we will exit the loop and return the previously set current value.

// Time Complextiy: O(N) - Each value from 2 to N will be visited at least once. The time it takes to do this is directly proportionate to N, where N is the Fibonacci Number we are looking to compute
// Space Complexity: O(1) - This requires 1 unit of space for the Integer N and 3 units of sapce to store the computed values (current, prev1, prev2) for every loop iteration. The amount of space doesn't change so this is constant space complexity.
var fib = function (N) {
  if (N <= 1) {
    return N;
  }
  if (N == 2) {
    return 1;
  }
  let current = 0;
  let prev1 = 1;
  let prev2 = 1;
  for (let i = 3; i <= N; i++) {
    current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return current;
};

// @lc code=end
