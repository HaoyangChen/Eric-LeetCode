/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function (ransomNote, magazine) {
  const map = {};
  for (const letter of magazine) {
    if (!map[letter]) {
      map[letter] = 0;
    }
    map[letter]++;
  }

  for (const letter of ransomNote) {
    if (!map[letter]) return false;
    map[letter]--;
  }
  return true;
};
// @lc code=end
