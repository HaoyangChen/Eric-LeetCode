/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */

 // Push 1 to the array, update the elements from the second to the right to the left. 
 // The value of the updated element is equal to the value at the current position plus the value at the previous position.
var getRow = function(rowIndex) {
    let result = [];
    while (rowIndex-- >= 0) {
        result.push(1);
        for (let i = result.length - 2; i > 0; i--) {
            result[i] = result[i] + result[i - 1];
        }
    }
    return result;
};
// @lc code=end

