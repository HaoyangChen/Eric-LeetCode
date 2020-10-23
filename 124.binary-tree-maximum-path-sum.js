/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
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

// Time Complexity: O(N) - We need to traverse all nodes in the tree
// Space Complexity: O(H) - Where H is the height of the tree. In the worst case, the height of the binary tree is equal to the number of nodes in the tree.
var maxPathSum = function (root) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  const dfs = (root) => {
    if (root == null) return 0;
    const left = dfs(root.left);
    const right = dfs(root.right);
    const innerMaxSum = left + root.val + right;
    maxSum = Math.max(maxSum, innerMaxSum);
    const outputMaxSum = root.val + Math.max(left, right);

    if (outputMaxSum < 0) {
      return 0;
    } else {
      return outputMaxSum;
    }
  };

  dfs(root);
  return maxSum;
};

// @lc code=end
