/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let res = [];
  let path = [];
  dfs(root, sum, res, path);
  return res;
};

const dfs = (root, sum, res, path) => {
  if (root === null) return;
  path.push(root.val);
  if (root.left === null && root.right === null) {
    if (root.val === sum) {
      res.push(path.slice()); //tricky part of adding .slice() method to push a new copy of array object
    }
    return;
  }
  if (root.left !== null) {
    dfs(root.left, sum - root.val, res, path);
    path.pop();
  }

  if (root.right !== null) {
    dfs(root.right, sum - root.val, res, path);
    path.pop();
  }
};

// @lc code=end
