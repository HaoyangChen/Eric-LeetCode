/*
 * @lc app=leetcode id=897 lang=javascript
 *
 * [897] Increasing Order Search Tree
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
var increasingBST = function (root) {
  let arr = [];
  const traversal = (root) => {
    if (root !== null) {
      traversal(root.left);
      arr.push(root.val);
      traversal(root.right);
    }
  };
  traversal(root);
  const res = new TreeNode(arr[0]);
  let currentNode = res;
  for (let i = 0; i < arr.length - 1; i++) {
    currentNode.left = null;
    currentNode.right = new TreeNode(arr[i + 1]);
    currentNode = currentNode.right;
  }
  return res;
};
// @lc code=end
