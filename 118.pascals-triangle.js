/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */

// Method: Dynamic Programming
// Time Complexity: O(numRows^2) - The outer loop obviously runs numRows times, but for each iteration of the outer loop, the inner loop runs rowNum times. 
// Space Complexity: O(numsRows^2) - Because we need to store each number that we update in triangle, the space requirement is the same as the time complexity.
var generate = function(numRows) {
    let triangle = [];
    // First base case: if user requests zero rows, they get zero rows
    if (numRows === 0) return triangle;
    
    // Second base case: first row is always [1]
    triangle.push([]);
    triangle[0].push(1);

    for (let rowNum = 1; rowNum < numRows; rowNum++) {
        let row = [];
        let prevRow = triangle[rowNum - 1];

        // The first row element is always 1
        row.push(1);
        for (let j = 1; j < rowNum; j++) {
            row.push(prevRow[j - 1] + prevRow[j]);
        }
        row.push(1);
        triangle.push(row);
    }
    return triangle;
};
// @lc code=end

