/*
 * @lc app=leetcode id=671 lang=javascript
 *
 * [671] Second Minimum Node In a Binary Tree
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

var findSecondMinimumValue = function (root) {
  let res = [];
  const traversal = (root) => {
    if (root !== null) {
      traversal(root.left);
      res.push(root.val);
      traversal(root.right);
    }
  };
  traversal(root);
  let arr = [...new Set(res)].sort();
  return arr[1] ? arr[1] : -1;
};

// @lc code=end
