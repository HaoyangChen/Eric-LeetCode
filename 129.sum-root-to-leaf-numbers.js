/*
 * @lc app=leetcode id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
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

// dfs
var sumNumbers = function (root) {
  if (!root) return 0;
  let sum = 0;

  const sumNumbersHelper = (root, cur) => {
    cur = cur * 10 + root.val;
    if (!root.left && !root.right) sum += cur;
    if (root.left) sumNumbersHelper(root.left, cur);
    if (root.right) sumNumbersHelper(root.right, cur);
  };
  sumNumbersHelper(root, 0);
  return sum;
};

// BFS
// var sumNumbers = function (root) {
//   if (!root) return 0;
//   const nodes = [[root, root.val]];
//   const res = [];
//   while (nodes.length) {
//     const [node, number] = nodes.shift();
//     if (!node.left && !node.right) {
//       res.push(number);
//     }
//     if (node.left) nodes.push([node.left, `${number}${node.left.val}`]);
//     if (node.right) nodes.push([node.right, `${number}${node.right.val}`]);
//   }
//   return res.reduce((acc, cur) => acc + +cur, 0);
// };

// @lc code=end
