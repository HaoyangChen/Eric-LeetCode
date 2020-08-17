/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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

 // Method 1: Recursion
 // Time Complexity: O(n) - Because we visit each node exactly once
 // Space Complexity: Worst Case O(n)
// var isValidBST = function(root) {
//     return helper(root, -Infinity, Infinity);
// };

// const helper = (root, lower, upper) => {
//     if (root === null) return true;
//     if (root.val <= lower || root.val >= upper) return false;
//     return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
// }

// Method 2: In-order traversal
// Time Complexity: O(n) In the worst case when the tree is BST or the "bad" element is the rightmost leaf.
// Space Complexity: O(n) to keep stack
var isValidBST = function(root) {
    let stack = [];
    let inorder = -Infinity;

    while (stack.length || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (root.val <= inorder) return false;
        inorder = root.val;
        root = root.right;
    }
    return true;
}

// @lc code=end

