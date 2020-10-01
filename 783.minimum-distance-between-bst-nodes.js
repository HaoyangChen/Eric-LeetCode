/*
 * @lc app=leetcode id=783 lang=javascript
 *
 * [783] Minimum Distance Between BST Nodes
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
var minDiffInBST = function (root) {
  let arr = toArray(root);
  let out = Infinity;
  let i = 1;
  while (i < arr.length) {
    let diff = Math.abs(arr[i - 1] - arr[i]);
    if (diff < out) out = diff;
    i++;
  }
  return out;
};

const toArray = (root, out = []) => {
  if (root) {
    toArray(root.left, out);
    out.push(root.val);
    toArray(root.right, out);
    return out;
  }
};

// @lc code=end
