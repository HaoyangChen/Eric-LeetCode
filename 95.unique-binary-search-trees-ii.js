/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

 // Time Complexity: O(4^n / n^(1/2))
 // Space Complexity: O(4^n / n^(1/2))
var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    return buildTrees(1, n);
};

var buildTrees = function(start, end) {
    let allTrees = [];
    if (start > end) {
        allTrees.push(null);
        return allTrees;
    }

    for (let i = start; i <= end; i++) {
        let leftTrees = buildTrees(start, i - 1);
        let rightTrees = buildTrees(i + 1, end);
        for (const leftNode of leftTrees) {
            for (const rightNode of rightTrees) {
                let currTree = new TreeNode(i);
                currTree.left = leftNode; 
                currTree.right = rightNode;
                allTrees.push(currTree);
            }
        }
    }
    return allTrees;
}
// @lc code=end

