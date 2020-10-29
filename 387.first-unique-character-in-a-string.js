/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// Linear time solution using map
// Time Complexity: O(N), since we go through the string of length N two times
// Space Complexity: O(1), because English Alphabet contains 26 letters
var firstUniqChar = function (s) {
  const count = new Map();
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const c = s.charAt(i);
    count.set(c, count.get(c) ? count.set(c, count.get(c) + 1) : 1);
  }
  // find the index
  for (let i = 0; i < n; i++) {
    if (count.get(s.charAt(i)) === 1) return i;
  }
  return -1;
};
// @lc code=end
