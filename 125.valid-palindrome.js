/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

 // Method 1: Get only alphanumeric characters and reverse the string. Compare the original string with the reversed string in lowercase to check if they are the same.
 // Time Complexity: O(|s|) - where s is the length of the given string
 // Space Complexity: O(|s|) - because we need to store the numbers and character into another string. In the worst case, the new string will be exactly the same as the given string, which will require O(|s|) space.
// var isPalindrome = function(s) {
//     let strippedString = s.replace(/[^0-9a-zA-Z]/g, '');
//     let reversedString = strippedString.split('').reverse().join('');
    
//     return strippedString.toLowerCase() == reversedString.toLowerCase();
// };

// Method2: Two pointers
// Time Complexity: O(|s|) - where s is the length of the given string
// Space Complexity: O(1) - constant space
var isPalindrome = function(s) {
    let n = s.length;
    let left = 0, right = n - 1;
    while (left < right) {
        while (left < right && !checkIsCharacter(s.charAt(left))) {
            ++left;
        }
        while (left < right && !checkIsCharacter(s.charAt(right))) {
            --right;
        }
        if (left < right) {
            if (s.charAt(left).toLowerCase() !== s.charAt(right).toLowerCase()) return false;
            ++left;
            --right;
        }
    }
    return true;
}

var checkIsCharacter = function(s) {
    let regex = /[0-9a-zA-Z]/g;
    return s.match(regex);
}
// @lc code=end

