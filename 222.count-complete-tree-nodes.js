/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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

// Method 1: Recursion;
// Time Complexity: O(N)
// Space Complexity: O(d) = O(logN) ---- where d is the height of the tree. The space is mainly determined by the recursion Stack
var countNodes = function (root) {
  return root !== null ? 1 + countNodes(root.left) + countNodes(root.right) : 0;
};



// @lc code=end
