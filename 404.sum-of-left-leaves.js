/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
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

// Time Complexity: O(n) - we need to traverse the entire binary tree in the worst case
// Space Complexity: O(n) - space due to recursion stack
var sumOfLeftLeaves = function (root) {
  return sumOfLeftLeavesHelper(root, false);
};

const sumOfLeftLeavesHelper = (root, flag) => {
  if (root === null) return 0;
  let leave = 0;
  if (flag && root.left === null && root.right === null) {
    leave = root.val;
  }
  let left = sumOfLeftLeavesHelper(root.left, true);
  let right = sumOfLeftLeavesHelper(root.right, false);
  return left + right + leave;
};
// @lc code=end
