/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
 * @param {TreeNode} root
 * @return {number}
 */
// Time Complexity: O(n) - traverse every node in the tree
// Space Complexity: O(height) - height is the height of the binary tree. Due to the recursion stack,
// the space complexity is equal to the height of the binary tree.
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    let leftHeight = maxDepth(root.left);
    let rightHeight = maxDepth(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
};
// @lc code=end

