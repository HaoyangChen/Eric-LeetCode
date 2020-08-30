/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */

// Method 1: Iterative
// Time Complexity: O(n) - each node in the tree is visited / added to the queue only once, the time complexity is O(n), where n is the number of nodes in the tree.
// Space Complexity: O(n) - In the worst case, the queue will contain all nodes in one level of the binary tree. For a full binary tree, the leaf level has [n/2] = O(n) leaves.
var invertTree = function (root) {
  if (root === null) return null;
  let queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    let current = queue.shift();
    let temp = current.left;
    current.left = current.right;
    current.right = temp;
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return root;
};

// Method2: Recursion
// Time Complexity: O(b) - each node in the tree is visited only once, where n is the number of nodes in the tree
// Space Complexity: O(n) - Because of recursion, O(h) function calls will be placed on the stack in the worst case, where h is the height of the tree. Because h∈O(n), the space complexity is O(n).
// var invertTree = function (root) {
//   if (root === null) {
//     return null;
//   }
//   let right = invertTree(root.right);
//   let left = invertTree(root.left);
//   root.left = right;
//   root.right = left;
//   return root;
// };
// @lc code=end
