/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */

// Backtracking
// Time Complexity: O(3^N X 4^M) where N is the number of digits in the input that maps to 3 letters and map M is the number of digits in the input that maps to 4 letter, and N + M is the total number digits in the input
// Space Complexity: O(3^N X 4^M) since one has to keep O(3^N X 4^M) solutions
var letterCombinations = function (digits) {
  const phone = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let output = [];
  const backtrack = (combination, nextDigits) => {
    if (nextDigits.length === 0) {
      output.push(combination);
    } else {
      let digit = nextDigits[0];
      let letters = phone[digit];
      for (let i = 0; i < letters.length; i++) {
        let letter = letters.charAt(i);
        backtrack(combination + letter, nextDigits.substring(1));
      }
    }
  };
  if (digits) {
    backtrack("", digits);
  }
  return output;
};
// @lc code=end
