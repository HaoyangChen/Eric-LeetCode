/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// Method 1: Recursion
// Algorithm:
// Start traversing the tree from the root node.
// If both the nodes p and q are in the right subtree, then continue the search with right subtree starting step 1.
// If both the nodes p and q are in the left subtree, then continue the search with left subtree starting step 1.
// If both step 2 and step 3 are not true, this means we have found the node which is common to node p's and q's subtrees. and hence we return this common node as the LCA.

// Time Complexity: O(N) - where N is the number of nodes in the BST. In the worst case, we might be visiting all the nodes of the BST
// Space Complexity: O(N) - This is because the maximum amount of space utilized by the recursion stack would be N since the height of a skewed BST would be N

// var lowestCommonAncestor = function (root, p, q) {
//   let parentVal = root.val;
//   let pVal = p.val;
//   let qVal = q.val;
//   if (pVal > parentVal && qVal > parentVal) {
//     return lowestCommonAncestor(root.right, p, q);
//   } else if (pVal < parentVal && qVal < parentVal) {
//     return lowestCommonAncestor(root.left, p, q);
//   } else {
//     return root;
//   }
// };

// Method2: Iterative
// Algorithm:
// The steps taken are also similar to approach 1. The only difference is instead of recursively calling the function, we traverse down the tree iteratively. This is possible without using a stack or recursion since we don't need to backtrace to find the LCA node. In essence of it the problem is iterative, it just wants us to find the split point. The point from where p and q won't be part of the same subtree or when one is the parent of the other.
// Time Complexity: O(n) - where NN is the number of nodes in the BST. In the worst case we might be visiting all the nodes of the BST.
// Space Complexity: O(1)
var lowestCommonAncestor = function (root, p, q) {
  let pVal = p.val;
  let qVal = q.val;
  let node = root;
  while (node !== null) {
    let parentVal = node.val;
    if (pVal < parentVal && qVal < parentVal) {
      node = node.left;
    } else if (pVal > parentVal && qVal > parentVal) {
      node = node.right;
    } else {
      return node;
    }
  }
  return null;
};

// @lc code=end
