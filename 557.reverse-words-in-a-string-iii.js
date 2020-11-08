/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function (s) {
//   const arr = s.split(" ");
//   let result = "";
//   for (let i = 0; i < arr.length - 1; i++) {
//     let reversedWord = arr[i].split("").reverse().join("");
//     result += reversedWord;
//     result += " ";
//   }
//   result += arr[arr.length - 1].split("").reverse().join("");
//   return result;
// };

var reverseWords = function (s) {
  return s
    .split(" ")
    .map((w) => w.split("").reverse().join(""))
    .join(" ");
};

// @lc code=end
