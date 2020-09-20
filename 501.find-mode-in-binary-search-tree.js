/*
 * @lc app=leetcode id=501 lang=javascript
 *
 * [501] Find Mode in Binary Search Tree
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
var findMode = function (root) {
  let pre = null;
  let currentTime = 1;
  let maxTime = 0;
  let res = [];
  const inorder = (root) => {
    if (!root) return;
    inorder(root.left);
    if (pre) {
      currentTime = root.val === pre.val ? currentTime + 1 : 1;
    }
    if (currentTime === maxTime) {
      res.push(root.val);
    } else if (currentTime > maxTime) {
      res.splice(0, res.length);
      res.push(root.val);
      maxTime = currentTime;
    }
    pre = root;
    inorder(root.right);
  };
  if (!root) return res;
  inorder(root);
  return res;
};
// @lc code=end
