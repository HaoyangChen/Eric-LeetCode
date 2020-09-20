/*
 * @lc app=leetcode id=538 lang=javascript
 *
 * [538] Convert BST to Greater Tree
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

// Method 1: Recursion
// Algorithm: For the recursive approach, we maintain some minor "global" state so each recursive call can access and modify the current total sum. Essentially, we ensure that the current node exists, recurse on the right subtree, visit the current node by updating its value and the total sum, and finally recurse on the left subtree. If we know that recursing on root.right properly updates the right subtree and that recursing on root.left properly updates the left subtree, then we are guaranteed to update all nodes with larger values before the current node and all nodes with smaller values after.
// Time Complexity: O(n) - A binary tree has no cycle by definition, so convertBST gets called on each node no more than once. Other than the recursive calls, convertBST does a constant amount of work, so a linear number of calls to convertBSTHelper will run in linear time
// Space Complexity: O(n) - Using the prior assertion that convertBSTHelper is called a linear number of times, we can also show that the entire algorithm has linear space complexity. Consider the worst case, a tree with only right (or left) subtrees. The call stack will grow until the end of the longest path is reached, which in this case includes all n nodes.
var convertBST = function (root) {
  let sum = 0;
  const convertBSTHelper = (root) => {
    if (root !== null) {
      convertBSTHelper(root.right);
      sum += root.val;
      root.val = sum;
      convertBSTHelper(root.left);
    }
  };
  convertBSTHelper(root);
  return root;
};
// @lc code=end
