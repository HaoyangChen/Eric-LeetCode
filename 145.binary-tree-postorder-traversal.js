/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
// var postorderTraversal = function(root) {
//     let res = [];
//     helper(root, res);
//     return res;
// };

// let helper = function(root, res) {
//     if (root !== null) {
//         if (root.left !== null) {
//             helper(root.left, res);
//         }
//         if (root.right !== null) {
//             helper(root.right, res);
//         }
//         res.push(root.val);
//     }
// }

// Method 2: Iteration
// Time Complexity: O(n) - Each node in the binary tree is visted exactly once, and the total number of nodes in the tree is n
// Space complexity: O(n) - Depends on the tree structure, the worst case can be O(n) when the entire tree needs to be stored.
var postorderTraversal = function(root) {
    let stack = [];
    let output = [];
    if (root === null) return output;
    stack.push(root);
    while(stack.length !== 0) {
        let node = stack.pop();
        output.unshift(node.val);
        if (node.left !== null) {
            stack.push(node.left);
        }
        if (node.right !== null) {
            stack.push(node.right);
        }
    }
    return output;

}

// @lc code=end

