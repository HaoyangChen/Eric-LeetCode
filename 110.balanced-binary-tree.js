/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @return {boolean}
 */

 // Method 1: Top to bottom
 // Time Complexity: O(nlog(n))
 // Space Complexity: O(n) - if the binary tree becomes a linked list, the recursion stack might include all nodes in the binary tree.
// var isBalanced = function(root) {
//     if (root === null) {
//         return true;
//     }
//     return Math.abs(height(root.left) - height(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right);
// };

// var height = function(root) {
//     if (root === null) return -1;
//     return 1 + Math.max(height(root.left), height(root.right));
// }

// Method 2: Bottom to top
// Time Complexity: O(n) - n is the total number of nodes in the binary tree. In the worst case, the recursion needs to visit every single node.
// Space Complexity: O(n) - In the worst case, the binary tree becomes a linked list. The recursion stack needs O(n) space.
var isBalanced = function(root) {
    return recur(root) !== -1;
}

var recur = function(root) {
    if (root === null) return 0;
    let left = recur(root.left);
    if (left === -1) return -1;
    let right = recur(root.right);
    if (right === -1) return -1;
    return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
}

// @lc code=end

