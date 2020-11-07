/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
  };
  const arr = s.split("");
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    if (vowels[arr[i]] && vowels[arr[j]]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    } else if (vowels[arr[i]]) {
      j--;
    } else {
      i++;
    }
  }
  return arr.join("");
};
// @lc code=end
