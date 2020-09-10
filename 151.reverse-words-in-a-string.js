/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

// Method 1: Use the JavaScript API - easy version
// Time Complexity: O(n)
// Space Complexity: O(n)

// var reverseWords = function (s) {
//   return s
//     .trim()
//     .split(" ")
//     .filter((e) => !!e)
//     .reverse()
//     .join(" ");
// };

// Method 2: Double-end deque
// Time Complexity: O(N) - N is the length of the given string
// Space Complexity: O(N) - double-end deque needs O(N) space to store the words

var reverseWords = function (s) {
  let left = 0;
  let right = s.length - 1;
  let queue = [];
  let word = "";
  while (s.charAt(left) === " ") left++;
  while (s.charAt(right) === " ") right--;
  while (left <= right) {
    let char = s.charAt(left);
    if (char === " " && word) {
      queue.unshift(word);
      word = "";
    } else if (char !== " ") {
      word += char;
    }
    left++;
  }
  queue.unshift(word);
  return queue.join(" ");
};

// @lc code=end
