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
// Method1:
// var pathSum = function (root, sum) {
//   let res = [];
//   let path = [];
//   dfs(root, sum, res, path);
//   return res;
// };

// const dfs = (root, sum, res, path) => {
//   if (root === null) return;
//   path.push(root.val);
//   if (root.left === null && root.right === null) {
//     if (root.val === sum) {
//       res.push(path.slice()); //tricky part of adding .slice() method to push a new copy of array object
//     }
//     return;
//   }
//   if (root.left !== null) {
//     dfs(root.left, sum - root.val, res, path);
//     path.pop();
//   }

//   if (root.right !== null) {
//     dfs(root.right, sum - root.val, res, path);
//     path.pop();
//   }
// };

// Method: DFS
var pathSum = function (root, sum) {
  let res = [];
  if (root === null) return res;
  let path = [];
  dfs(root, sum, path, res);
  return res;
};

const dfs = (node, sum, path, res) => {
  if (node === null) {
    return;
  }
  if (node.val === sum && node.left === null && node.right === null) {
    path.push(node.val);
    res.push(path.slice());
    path.pop(); // why pop here?
    return;
  }
  path.push(node.val);
  dfs(node.left, sum - node.val, path, res);
  dfs(node.right, sum - node.val, path, res);
  path.pop();
};

// @lc code=end
