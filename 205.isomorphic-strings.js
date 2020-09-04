/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Method 1: Hashmap
// Time Complexity: O(n) - where n is the length of the given string
// Space Complexity: O(n) - We need to do two mappings for the given two strings. In the worst case, if the all letters in the given string are different we need to store all of them in the newly created map.
// var isIsomorphic = function (s, t) {
//   let mapS = {},
//     mapT = {};
//   for (let i = 0; i < s.length; i++) {
//     if (!mapS[s[i]]) mapS[s[i]] = t[i];
//     if (!mapT[t[i]]) mapT[t[i]] = s[i];
//     if (mapS[s[i]] != t[i] || mapT[t[i]] != s[i]) return false;
//   }
//   return true;
// };

// Method 2:
// The idea is that we need to map a char to another one, for example, "egg" and "add", we need to constract the mapping 'e' -> 'a' and 'g' -> 'd'. Instead of directly mapping 'e' to 'a', another way is to mark them with same value, for example, 'e' -> 1, 'a'-> 1, and 'g' -> 2, 'd' -> 2, this works same.
// So we use two arrays here m1 and m2, initialized space is 256 (Since the whole ASCII size is 256, 128 also works here).
// Traverse the character of both s and t on the same position, if their mapping values in m1 and m2 are different, means they are not mapping correctly, returen false;
// else we construct the mapping, since m1 and m2 are both initialized as 0, we want to use a new value when i == 0, so i + 1 works here.

// Time Complexity: O(n)
// Space complexity: O(n) ?
var isIsomorphic = function (s, t) {
  return isIsomorphicHelper(s) === isIsomorphicHelper(t);
};

const isIsomorphicHelper = (str) => {
  let map = {};
  let n = str.length;
  let result = "";
  for (let i = 0; i < n; i++) {
    let c = str.charAt(i);
    if (!map[c]) {
      map[c] = i + 1;
    }
    result += map[c];
  }
  return result;
};
// @lc code=end
