/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
// Time Complexity: O(n) - Because we need to traverse the entire input tree once, the total runtime is O(n), where n is the number of nodes in the tree.
// Space Complexity: O(n) - The number of recursive calls is bound by the height of the tree. In the worst case, the tree is linear and the height is in O(n).
//                            Therefore, space complexity due to recursive calls on the stack is O(n) in the worst case.
// var isSymmetric = function (root) {
//   return isMirror(root, root);
// };

// const isMirror = (t1, t2) => {
//   if (t1 === null && t2 === null) return true;
//   if (t1 === null || t2 === null) return false;
//   return (
//     t1.val === t2.val &&
//     isMirror(t1.right, t2.left) &&
//     isMirror(t1.left, t2.right)
//   );
// };

// Method 2: Iterative - BFS

// @lc code=end
