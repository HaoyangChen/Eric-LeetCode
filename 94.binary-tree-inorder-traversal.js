/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
 * @return {number[]}
 */

 // Method 1: Recursion
 // Time Complexity: O(n) - Because the recursive function is T(n) = 2 * T(n/2) + 1
 // Space Complexity: The worst case space required is O(n), and in the average case it's O(logn) where n is the number of nodes.
// var inorderTraversal = function(root) {
//     let res = [];
//     helper(root, res);
//     return res;
// };

// let helper = function(root, res) {
//     if (root !== null) {
//         if (root.left !== null) {
//             helper(root.left, res);
//         }
//         res.push(root.val);
//         if (root.right !== null) {
//             helper(root.right, res);
//         }
//     }
// }

// Method 2: Iterating Method using Stack
// Time Complexity: O(n)
// Space Complexity: O(n)
var inorderTraversal = function(root) {
    let res = [];
    let stack = [];
    let curr = root;
    while (curr !== null || stack.length !== 0){
        while (curr != null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        res.push(curr.val);
        curr = curr.right;
    }
    return res;
}

// @lc code=end

