/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

// Method 1: Recursion
// Algorithm: Traverse both the given trees in a preorder fasion. At each step we check if the current node exists for both the trees. If so, we add the values in the current nodes of both the trees and update the value in the current node of the first tree to reflect the sum obtained.
//             At each step, we also call the original function mergeTrees() with the left children and then with the right children of the current nodes of the two trees. If at any step, one of these children happens to be null, we return the child of the other tree (representing the corresponding child subtree) to be added as a child subtree to the calling parent node in the first tree. At the end, the first tree will represent the required resultant merged binary tree.
// Time Complexity: O(m) - A total of m nodes need to be traversed. Here, m represents the minimum number of nodes from the two given trees.
// Space Complexity: O(m) - The depth of recursion tree can go up to m in the case of a skewed tree. In average case, the depth will be O(logm)
var mergeTrees = function (t1, t2) {
  if (t1 === null) return t2;
  if (t2 === null) return t1;
  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};
// @lc code=end
