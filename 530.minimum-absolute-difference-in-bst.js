/*
 * @lc app=leetcode id=530 lang=javascript
 *
 * [530] Minimum Absolute Difference in BST
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
var getMinimumDifference = function (root) {
  //     Converting tree to an sorted array
  const arr = toArray(root);
  let out = Infinity;
  let i = 1;
  //     Now, simply finding the difference
  while (i < arr.length) {
    let diff = Math.abs(arr[i - 1] - arr[i]);
    if (diff < out) out = diff;
    i++;
  }
  return out;
};

function toArray(root, out = []) {
  if (root) {
    toArray(root.left, out);
    out.push(root.val);
    toArray(root.right, out);
    return out;
  }
}

// @lc code=end
